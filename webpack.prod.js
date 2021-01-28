const ImageminPlugin = require("imagemin-webpack-plugin").default;
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.js$./,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/assets/dicky.png",
      outputPath: "icons",
      inject: true,
      favicons: {
        path: "/dist",
        start_url: "/dist/index.html",
        icons: {
          android: true,
          appleIcon: true,
          coast: false,
          favicons: true,
          windows: true,
          firefox: true,
          appleStartup: false,
          yandex: false,
        },
      },
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhiteSpace: true,
          removeComments: true,
        },
      }),
    ],
  },
});
