"use strict";

var Webpack = require("webpack"),
    sassLintPlugin = require("sasslint-webpack-plugin"),
    path = require("path"),
    nodeModulesPath = path.resolve(__dirname, "node_modules"),
    buildPath = path.resolve(__dirname, "dist"),
    mainPath = path.resolve(__dirname, "src", "app", "main.tsx");

module.exports = {
    entry: {
        app: mainPath,
        vendor: ["jquery", "bootstrap-sass"]
    },

    output: {
        path: buildPath,
        publicPath: "/dist/",
        filename: "bundle.js"
    },

    devtool: "source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    plugins: [
        new Webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new Webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new sassLintPlugin({
            glob: 'src/**/*.s?(a|c)ss',
            failOnWarning: true,
            failOnError: true
        })
    ],

    module: {
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" },
            { test: /\.tsx?$/, loader: "tslint" }
        ],

        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.scss$/, loaders: ["style", "css", "sass"]}
        ]
    },

    tslint: {
        emitErrors: true,
        failOnHint: true
    }
};