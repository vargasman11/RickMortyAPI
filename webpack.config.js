const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const {extendDefaultPlugins} = require("svgo");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    mode: 'development',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext]'
    },
    devtool: "source-map",
    devServer: {
        port: 2000,
        // liveReload: true,
        // watchFiles: ['src/**/*.scss', 'src/*.js'],
        // hot : true,
        static: {
            directory: path.join(__dirname, '/dist'),
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        // new HtmlWebpackPlugin({
        //     title: "API",
        //     filename: "index.html"
        // }),
        //Comment this out if you do not want to use this, this was put in place to proxy mamp development.
        // new BrowserSyncPlugin({
        //     // browse to http://localhost:3000/ during development,
        //     // ./public directory is being served
        //     host: 'localhost',
        //     port: 3000,
        //     files:['./src/scss/**/*.scss', ],
        //     // server: { baseDir: ['public'] }
        //     proxy: 'http://localhost'
        // })

    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // minicssextract plugin
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                    //Post CSS
                    "postcss-loader"
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ],
    },
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            "imagemin-gifsicle",
                            "imagemin-mozjpeg",
                            "imagemin-pngquant",
                            "imagemin-svgo",
                        ],
                    },
                },
                // Disable `loader`
                loader: false,
            }),
        ]
    }
}