// @ts-check
const HtmlWebpackPlugin = require('html-webpack-plugin')
const env = require('./devtools/env')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
            getScssRuleConfig(),
        ],
    },
    resolve: {
        modules: [env.srcDir, 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            favicon: 'src/assets/favicon.png',
        }),
        ...(isDevMode
            ? []
            : [
                  new MiniCssExtractPlugin({
                      filename: '[name].[contenthash].css',
                  }),
              ]),
    ],
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
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
}
module.exports = config

/**
 * @return { import('webpack').RuleSetRule }
 */
function getScssRuleConfig() {
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
