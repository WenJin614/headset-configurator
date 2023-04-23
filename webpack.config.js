/// <binding />
"use strict";
var path = require("path");
var WebpackNotifierPlugin = require("webpack-notifier");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");
module.exports = {
  entry: ['babel-polyfill', "./src/main.jsx"],
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }, 
      },
      { test: /\.css$/, 
        use: {
          loader: "css-loader"
      },  
      }
    ]
  },
  devtool: "inline-source-map",
  plugins: [new WebpackNotifierPlugin(), new BrowserSyncPlugin()],
  resolve: {
    extensions: [ '.js', '.jsx', '.css'],
  }
};