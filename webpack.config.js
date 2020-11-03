// @ts-check
const HtmlWebpackPlugin = require('html-webpack-plugin')
const env = require('./devtools/env')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDevMode = env.mode === 'development'

const baseConfig = getModeRelatedConfig()

/**
 * @typedef { import('webpack').Configuration & {devServer: import('webpack-dev-server').Configuration } } WebpackConfiguration
 * @type { WebpackConfiguration }
 */
const config = {
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
        ],
    },
    resolve: {
        modules: [env.srcDir, 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    plugins: plugins(),
    devtool: 'source-map',
    devServer: {
        contentBase: env.srcDir,
        stats: {
            modules: false,
        },
        port: env.devServerPort,
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
    if (!isDevMode) {
        pluginsList.push(new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }))
    }

    if (env.stat) {
        pluginsList.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }))
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
