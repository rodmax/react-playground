const ExtractTextPlugin = require('extract-text-webpack-plugin');
const env = require('./devtools/env');

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: env.buildDir,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader'
                }),
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        modules: [
            env.srcDir,
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: env.srcDir,
        port: env.devServerPort,
    }
};
