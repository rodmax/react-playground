const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');


module.exports = {
    entry: './src/index.tsx',
    output: {
        path: env.buildDir,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
        ]
    },
    resolve: {
        modules: [
            env.srcDir,
            'node_modules'
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            favicon: 'src/assets/favicon.png'
        }),
        new HtmlWebpackHarddiskPlugin({
            alwaysWriteToDisk: true,
            outputPath: env.srcDir
        })
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: env.srcDir,
        stats: {
            modules: false
        },
        port: env.devServerPort,
        overlay: true
    }
};
