// @ts-check
const HtmlWebpackPlugin = require('html-webpack-plugin')
const env = require('./tools/env')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDevMode = env.mode === 'development'

const baseConfig = getModeRelatedConfig()

/**
 * @typedef { import('webpack').Configuration & {devServer: import('webpack-dev-server').Configuration } } WebpackConfiguration
 * @type { WebpackConfiguration }
 */
const config = {
    target: 'web',
    entry: {
        index: './src/index.tsx',
    },
    mode: baseConfig.mode,
    output: {
        path: env.buildDir,
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            scssRuleConfig(),
            fileLoaderConfig(),
        ],
    },
    resolve: {
        modules: [env.srcDir, 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    plugins: plugins(),
    devtool: 'source-map',
    devServer: {
        contentBase: env.buildDir,
        host: '0.0.0.0',
        port: env.devServerPort,
        hot: true,
        stats: {
            all: false,
            assets: true,
            groupAssetsByEmitStatus: true,
            colors: true,
            errorDetails: true,
            errors: true,
        },
        overlay: true,
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
}
module.exports = config

/**
 * @return { WebpackConfiguration['plugins'] }
 */
function plugins() {
    /** @type { WebpackConfiguration['plugins'] }*/
    const pluginsList = [
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            favicon: 'src/assets/favicon.png',
        }),
    ]

    if (isDevMode) {
        return pluginsList
    }

    // Production only plugins
    pluginsList.push(new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }))

    if (env.stat) {
        pluginsList.push(
            new BundleAnalyzerPlugin({
                analyzerMode: 'static',
                openAnalyzer: false,
                reportFilename: env.reportFilename,
            })
        )
    }
    return pluginsList
}

/**
 * @return { import('webpack').RuleSetRule }
 */
function scssRuleConfig() {
    return {
        test: /\.scss$/,
        use: [
            // The MiniCssExtractPlugin should be used only on production builds
            // without style-loader in the loaders chain, especially if you want to have HMR in development
            // see details here https://github.com/webpack-contrib/mini-css-extract-plugin#common-use-case
            isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: { sourceMap: true },
            },
            {
                loader: 'postcss-loader',
                options: { sourceMap: true },
            },
            {
                loader: 'sass-loader',
                options: { sourceMap: true },
            },
        ],
    }
}

/**
 * @return { Pick<WebpackConfiguration, 'mode'>}
 */
function getModeRelatedConfig() {
    return {
        mode: env.mode,
    }
}

/**
 * @return { import('webpack').RuleSetRule }
 */
function fileLoaderConfig() {
    return {
        test: /\.(png|jpe?g|gif|html)$/i,
        loader: 'file-loader',
        options: {
            /**
             * @param {string} resourcePath
             */
            name(resourcePath) {
                if (resourcePath.includes(env.reportFilename)) {
                    return '[name].[ext]'
                }

                return '[name].[contenthash].[ext]'
            },
        },
    }
}
