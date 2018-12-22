// Webpack is the node program
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const configObject = {
    //Bundling
    entry: {
        lodash: './src/js/_lodash.js',
        index: './src/js/index.js'
    },

    output: {
        filename: '[name]-bundle.js',
        path: __dirname + '/dist'
    },
    // output: {
    //     path: path.resolve(__dirname, 'dist'),// It will find the dist folder if present or it will create it
    //     filename: '[hash]-bundle.js'// it will create the file in dist folder
    // },
    mode: 'development',// to set mode it will reduce the extra code if mode set to production.Default id production mode


    //loaders used for transformation like ts ->js or es5 -> es5 or css->js

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '../'
                        }
                    },
                    "css-loader", "sass-loader"
                ]
            },
            // {
            //     test: /\.scss$/,// it will append all file ending with .css to bundle.js.We don't need to add css file
            //     use: [
            //         "style-loader", // creates style nodes from JS strings
            //         "css-loader", // translates CSS into CommonJS
            //         "sass-loader" // compiles Sass to CSS, using Node Sass by default
            //     ]
            // },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["babel-preset-env"]
                    }
                }
            }
        ]
    },
    //plugin for bundle automation

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({ title: 'Sapient Webpack new' }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]

}

module.exports = configObject;