// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

// const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV || 'development', // Use 'development' mode by default
  devtool: 'source-map',
  entry: {
    index: './src/js/index.js',                // Entry point for index.html
    movieDetails: './src/js/movieDetails.js',  // Entry point for details.html
    searchPage: './src/js/searchPage.js',      // Entry point for search.html
  },
  output: {
    path: path.resolve(__dirname, 'dist'),     // Output directory
    filename: 'js/[name].bundle.js',           // Output filename pattern
    publicPath: '/',                           // Base path for all assets
  },
  module: {
    rules: [
      {
        test: /\.js$/,                         // Process JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,                        // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,     // Process image files
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),                  // Cleans the dist folder on each build
    new HtmlWebpackPlugin({
      template: './src/pages/index.html',   // Template for index.html
      filename: 'index.html',
      chunks: ['index'],                       // Include only the index chunk
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/details.html', // Template for details.html
      filename: 'details.html',
      chunks: ['movieDetails'],                // Include only the movieDetails chunk
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/search.html',  // Template for search.html
      filename: 'search.html',
      chunks: ['searchPage'],                  // Include only the searchPage chunk
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
    new Dotenv({
      path: './.env', // load default environment variables
      safe: true, // load all environment variables, even if they're not used
      allowEmptyValues: true, // allow empty values in environment variables
      systemvars: true, // load system environment variables
      silent: true, // suppress warnings and errors
    }),
  ],
  // optimization: {
  //   minimize: isProduction,
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
  devServer: {
    static: path.join(__dirname, 'dist'),    // Serve static files from public
    // historyApiFallback: true,
    compress: true,
    port: 8080,                                // Development server port
    hot: true,                                 // Enable hot module replacement
  },
  // devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map', // Generate source maps for easier debugging
};
