const merge = require('webpack-merge')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const dotenv = require('dotenv')

const baseConfig = require('./webpack.common')

const address = require('ip').address
const { PORT } = require('./const')

// Plugins
const path = require('path')

// Paths
const paths = require('./paths')
const srcDir = paths.dirSrc

// Env variables
const env = dotenv.config().parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

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
            'Assets': path.join(srcDir, '/assets'),
            'Components': path.join(srcDir, '/components'),
            'Routes': path.join(srcDir, '/routes'),
            'Actions': path.join(srcDir, '/actions'),
            'Reducers': path.join(srcDir, '/reducers'),
            'Translations': path.join(srcDir, '/const/translations'),
            'Bunches': path.join(srcDir, '/const/bunches'),
            'FontAwesome': path.join(srcDir, '/fontAwesome')
        }
    },
    plugins: [
        new webpack.DefinePlugin(envKeys),
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