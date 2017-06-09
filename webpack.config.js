const path = require('path');
const port = process.env.PORT || 3000;
const outputPath = path.join(__dirname, 'dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
console.log(path.resolve(__dirname, 'src'));
module.exports = {
    entry: './src/main.jsx',
    output: {
        path: outputPath,
        filename: 'dist/bundle.js'
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
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new ExtractTextPlugin('dist/bundle.css'),
    ],
    devtool: 'source-map',
    devServer: {
        port,
    }
};
