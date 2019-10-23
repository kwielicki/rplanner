const merge = require('webpack-merge')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const baseConfig = require('./webpack.common')

const address = require('ip').address
const { PORT } = require('./const')

// Plugins
const path = require('path')

// Paths
const paths = require('./paths')


module.exports = merge(baseConfig, {
    mode: 'development',
    entry: {
        app: [
          path.join(paths.dirSrc, 'index.js'),
        ]
    },
    output: {
        publicPath: '/',
        filename: '[name].[hash].js',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.html$/,
            use: [{
                loader: "html-loader"
            }]
        },
        { 
            test: /\.scss$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        import: true,
                        modules: {
                            mode: 'local',
                            localIdentName: '[local]____[hash:base64:5]',
                            context: path.resolve(__dirname, 'src'),
                            hashPrefix: 'planner'
                        }
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        import: true,
                        sourceMapContents: true,
                        includePaths: ['./src']
                    }
                }
            ]
        },
        {
            test: /\.(png|svg|jpe?g|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]?[contenthash]'
                    }
                }
            ]
        }]
    },
    devServer: {
        host: address(),
        port: PORT,
        historyApiFallback: true,
        clientLogLevel: 'error',
        overlay: true,
        https: true
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            'PATH_TO__ASSETS': path.resolve(__dirname, '../src/assets/'),
            'PATH_TO__COMPONENTS': path.resolve(__dirname, '../src/components/'),
            'PATH_TO__ROUTES': path.resolve(__dirname, '../src/Routes/'),
            'PATH_TO__ACTIONS': path.resolve(__dirname, '../src/actions/'),
            'PATH_TO__REDUCERS': path.resolve(__dirname, '../src/reducers/'),
            'PATH_TO__TRANSLATIONS': path.resolve(__dirname, '../src/consts/translations')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            DEBUG: false
        }),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'index.html'
        })
    ],
    stats: {
        // Add build date and time information
        builtAt: true,
        env: true,
        performance: true
    }
})