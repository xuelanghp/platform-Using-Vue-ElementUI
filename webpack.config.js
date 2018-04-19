const resolve = require('path').resolve
const proxy = require('http-proxy-middleware')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const url = require('url')
const publicPath = ''

module.exports = (options = {}) => ({
    entry: {
        vendor: './src/vendor',
        index: './src/main.js'
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
        chunkFilename: '[id].js?[chunkhash]',
        publicPath: options.dev ? '/' : publicPath
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }]
        }]
    },
    plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
    }), new HtmlWebpackPlugin({
        template: 'src/index.html'
    })],
    resolve: {
        alias: {
            '~': resolve(__dirname, 'src')
        },
        extensions: ['.js', '.vue', '.json', '.css']
    },
    devServer: {
        host: '127.0.0.1',
        port: 8010,
        proxy: {
            '/xcx': {
                target: 'https://wxapitest.aomygod.com',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/xcx': '/xcx'
                }  
            }
        },
        historyApiFallback: {
            index: url.parse(options.dev ? '/' : publicPath).pathname
        }
    },
    devtool: options.dev ? '#eval-source-map' : '#source-map'
})