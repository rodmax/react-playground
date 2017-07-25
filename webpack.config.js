const ExtractTextPlugin = require('extract-text-webpack-plugin');
const env = require('./devtools/env');

module.exports = {
    entry: './src/main.tsx',
    output: {
        path: env.buildDir,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader?importLoaders=1!postcss-loader'
                }),
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
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
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
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
