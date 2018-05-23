const HtmlWebpackPlugin = require("html-webpack-plugin")
var webpack=require("webpack")
const path=require("path")
module.exports = {
  entry: "./src/index.ts",
  output: {
      filename: "./dist/bundle.js",
  },
  devtool: "source-map",
  resolve: {
      extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
    inline: true,
    watchContentBase: true,
    host: 'localhost',
    setup: function(app) {
        app.get('/some/path', function(req, res) {
            console.log(11)
            res.json({ custom: 'response' });
        });
    }

},
module: {
      rules: [
          { test: /\.tsx?$/, loader: "ts-loader" },
          { test: /\.js$/,enforce: "pre", loader: "source-map-loader" }
      ]
      
  },
  plugins:[
    new HtmlWebpackPlugin({
      // filename: 'test.html',
      template: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
