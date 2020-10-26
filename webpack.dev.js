const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
    mode: "development",
    devtool: "none",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader', //3. Inject styles into DOM
                        'css-loader', //2. turns css into common js
                        "sass-loader" //1. turns sass into css
                    ],
                },
            ]
        }
    });