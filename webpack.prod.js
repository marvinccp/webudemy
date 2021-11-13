const HTMLWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizer = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  mode: "production",
  output: {
    clean: true,
    filename:'main.[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          sources: false,
          minimize: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.css$/,
        exclude: /styles.ccs$/,
        use: ["style-loader", "css-loader"],
      },
       {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /styles.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      
    ],
  },
  optimization:{
minimize:true,
minimizer:[
   new CssMinimizer(),
   new TerserPlugin()
]
  },
  plugins: [
    new HTMLWebPackPlugin({
      title: "My WebPack-Work",
      template: "./src/index.html",
      filename: "./index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[fullhash].css",
    }),
    new CopyPlugin({
      patterns: [{ from: "./src/assets", to: "assets/" }],
    }),
  ],
};
