const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.join(__dirname, "/node_modules/"),
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                type: 'asset/inline',
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "./dist")
        },
        open: true,
        hot: true,
        compress: true,
        port: 8080,

    }

}