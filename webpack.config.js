const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:3000/",
  },
  mode: "development",
  devServer: {
    port: 3000,
    open: true,
    hot: true, // Enable hot module replacement for smoother development
  },
  resolve: {
    extensions: [".js", ".jsx"], // Ensure Webpack resolves both .js and .jsx files
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Ensure React preset is included
          },
        },
      },
      {
        test: /\.css$/, // Optionally handle CSS imports
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        remoteApp: "remoteApp@https://bouchraakl.github.io/microfrontend-remote/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "18.2.0" },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "18.2.0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
