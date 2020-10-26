const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: ['babel-polyfill','./index.js'],
    plugins: [new HtmlWebpackPlugin({
        template: "./template.html"
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test:/\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|browser_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ],
    },          
};