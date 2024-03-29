// Node import
const path = require("path");

// Plugins de traitement pour dist/
const webpack = require("webpack");

const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

require("dotenv").config();

// Config pour le devServer
const host = "localhost";
const port = 8080;

const devMode = process.env.NODE_ENV !== "production";

// Config de Webpack
module.exports = {
  // Passe le build par dèfaut en déeveloppement
  mode: "development",
  // Expose le dossier src/ pour les imports
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
  },
  // Points d'entrée pour le travail de Webpack
  entry: {
    app: [
      // Styles
      "./src/styles/index.scss",
      // JS
      "./src/index.js",
    ],
  },
  // Sortie
  output: {
    // Nom du bundle
    filename: "[name].js",
    // Nom du bundle vendors si l'option d'optimisation / splitChunks est activée
    chunkFilename: "vendors.js",
    // Cible des bundles
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  // Optimisation pour le build
  optimization: {
    // Code spliting
    splitChunks: {
      chunks: "all",
    },
    // Minification TerserPlugin Ligne 52
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  // Modules
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          // babel avec une option de cache
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      // CSS / SASS / SCSS
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // style-loader ou fichier
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          // Chargement du CSS
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: { plugins: [["autoprefixer"]] },
              sourceMap: true,
            },
          },
          // SASS
          "sass-loader",
        ],
      },
      // Images
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/",
            },
          },
        ],
      },
      // fonts
      {
        test: /\.(ttf|otf|eot|woff2?)(\?[a-z0-9]+)?$/,
        exclude: /medias/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts/",
              name: "[name][hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    open: true, // on ouvre le navigateur
    historyApiFallback: true,
    host: host,
    port: port,
    client: {
      overlay: true, // Overlay navigateur si erreurs de build
      progress: true,
    },
    devMiddleware: {
      stats: "minimal", // Infos en console limitées
    },
  },
  plugins: [
    // Permet de prendre le index.html de src comme base pour le fichier de dist/
    new HtmlWebPackPlugin({
      favicon: "./src/styles/assets/images/abeba/favicon.png",
      template: "./src/index.html",
      filename: "./index.html",
    }),
    // Permet d'exporter les styles CSS dans un fichier css de dist/
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.EnvironmentPlugin([
      "APP_ID",
      "SEARCH_KEY",
      "PROJECT_INDEX_NAME",
    ]),
  ],
};
