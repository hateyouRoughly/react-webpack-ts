delete process.env.TS_NODE_PROJECT;

const path = require("path");
const webpack = require("webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (env) => {
  const mode = env?.mode == "production" ? "production" : "development";
  const envPath = env?.mode ? ".env." + env?.mode : ".env";

  return {
    mode, // Adjust to 'production' for production builds
    entry: "./src/index.tsx", // Main entry point
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"), // Output directory
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
      // Add plugins as needed (e.g., for hot reloading)
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "public"), // Serve content from the public folder
      },
      compress: true, // Enable gzip compression for everything served
      port: 8080, // Specify development server port (optional)
    },
  };
};
