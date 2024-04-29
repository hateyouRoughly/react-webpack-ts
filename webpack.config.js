const path = require("path");
const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  const mode = env?.mode == "production" ? "production" : "development";
  const envPath = env?.mode ? ".env." + env?.mode : ".env";

  return {
    mode, // Adjust to 'production' for production builds
    entry: "./src/index.tsx", // Main entry point
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, "dist"), // Output directory
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/, // Add support for CSS files (optional)
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      plugins: [
        new TsconfigPathsPlugin({
          /* options: see below */
        }),
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        process: {
          env: JSON.stringify(
            require("dotenv").config({ path: envPath }).parsed
          ),
        },
      }),
      new CopyPlugin({
        patterns: [
          { 
            from: './public', 
            to: './',
            filter: (resourcePath) => !resourcePath.endsWith('/index.html') // Exclude based on path
          } // Copy all public folder assets to dist/public
        ],
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html', // Path to your HTML template
        chunks: ['main', '[name]'],  // Include main chunk (bundle.js) and named chunks
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "public"), // Serve content from the public folder
      },
      compress: true, // Enable gzip compression for everything served
      port: 8080, // Specify development server port (optional)
      historyApiFallback: true
    }
  };
};
