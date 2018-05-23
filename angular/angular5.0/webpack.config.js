var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: __dirname + "/src/main.ts",

    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        // chunkFilename: "[name][hash].js"
    },
    
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                // query: {
                //     minimize: true
                // }
            },
            {
                test: /\.styl$/,
                loader: 'css-loader!stylus-loader'
            },
            {
                test: /\.css$/,
                use: ['to-string-loader', 'css-loader']
            },

            {
                test: /\.png|.jpg$/,
                loader: "url-loader"
            }
        ]

    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        compress: true,
        // 模块的热加载，必须结合 HotModuleReplacementPlugin使用
        hot: true,
        // inline: true,
        port: 9900,
        host: 'localhost',
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            // ( 公共chunk(commnons chunk) 的名称)
            filename: "commons.js",
            // ( 公共chunk 的文件名)
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}
