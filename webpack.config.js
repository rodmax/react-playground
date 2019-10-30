// @ts-check
const HtmlWebpackPlugin = require('html-webpack-plugin')
const env = require('./devtools/env')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const baseConfig = getModeRelatedConfig()

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    entry: './src/index.tsx',
    mode: baseConfig.mode,
    output: {
        path: env.buildDir,
        filename: 'bundle.js',
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
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
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
}

/**
 * @return {import('webpack').Rule}
 */
function getScssRuleConfig() {
    return {
        test: /\.scss$/,
        use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: { sourceMap: true },
            },
            {
                loader: 'postcss-loader',
                options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } },
            },
            {
                loader: 'sass-loader',
                options: { sourceMap: true },
            },
        ],
    }
}

/**
 * @return {Pick<import('webpack').Configuration, 'mode'>}
 */
function getModeRelatedConfig() {
    return {
        mode: env.mode,
    }
}
