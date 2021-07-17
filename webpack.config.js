const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    filename: "main.js",
    path: path.join(__dirname, "build"),
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    index: "index.html",
    overlay: true,
    stats: "errors-only",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.png$/,
        loader: "file-loader",
        options: {
          publicPath: "./",
          name: "[name].[ext]",
        },
      },
    ],
  },
};
