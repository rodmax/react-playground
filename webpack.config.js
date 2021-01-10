// @ts-check
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const env = require('./tools/env')

const isDevMode = env.mode === 'development'
const isProdMode = !isDevMode

/**
 * @typedef { import('webpack').Configuration & {devServer: import('webpack-dev-server').Configuration } } WebpackConfiguration
 * @type { WebpackConfiguration }
 */
const config = {
    target: 'web',
    entry: {
        index: './src/index.tsx',
    },
    mode: env.mode,
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
            assetsResourceConfig(),
        ],
    },
    resolve: {
        modules: [env.srcDir, 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    plugins: plugins(),
    devtool: 'source-map',
    devServer: devServerConfig(),
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
            favicon: 'src/assets/favicon.svg',
        }),
    ]

    if (isProdMode) {
        // Production only plugins
        pluginsList.push(new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }))

        if (env.stat) {
            pluginsList.push(
                new BundleAnalyzerPlugin({
                    analyzerMode: 'static',
                    openAnalyzer: false,
                    reportFilename: path.join('assets', env.reportFilename),
                })
            )
        }
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
 * @return { import('webpack').RuleSetRule }
 */
function assetsResourceConfig() {
    return {
        test: /\.(png|jpe?g|gif|html|svg)$/i,
        type: 'asset/resource',
        generator: {
            /** @param { {filename: string} } resource */
            filename: resource => {
                if (resource.filename.includes(env.reportFilename)) {
                    return 'assets/[name][ext]'
                }

                return 'assets/[name].[contenthash][ext]'
            },
        },
    }
}

/**
 * @return { import('webpack-dev-server').Configuration }
 */
function devServerConfig() {
    return {
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
    }
}
