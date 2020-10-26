const path = require("path");
const config = require("./webpack.config");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
    mode: "production",
    output: {
        filename: "[name].[contentHash].bundle.js",
        chunkFilename: '[name].[id].js',
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].[contenHash].css"}), 
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, //3. Extract css into files
                    'css-loader', //2. turns css into common js
                    "sass-loader" //1. turns sass into css
                ],
            },
              {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                'file-loader',
                ],
            },
        ]
    }
});