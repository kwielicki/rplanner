const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const dotenv = require('dotenv')
const path = require('path')
const address = require('ip').address


const webpackCommon = require('./webpack.common.js')
const webpackEnvs = path.resolve(__dirname, 'webpack-envs')

const { PORT } = require(path.resolve(webpackEnvs, 'const.js'))

// Env variables
const env = dotenv.config().parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = merge(webpackCommon, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
        { 
            test: /\.scss$/,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        localsConvention: 'camelCase',
                        modules: {
                            localIdentName: '[local]____[hash:base64:5]',
                        }
                    }
                },
                'resolve-url-loader',
                {   
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            sourceMap: true,
                            import: true,
                            sourceMapContents: true,
                            includePaths: ['./src']
                        }
                    }
                }
            ]
        },
        {
            test: /\.(png|jpg|jpeg|gif|ico)$/,
            exclude: /node_modules/,
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
        clientLogLevel: 'error',
        contentBase: './dist',
        historyApiFallback: true,
        host: address(),
        hot: true,
        https: {
            key: './example.com+5-key.pem',
            cert: './example.com+5.pem'
        },
        open: true,
        overlay: true,
        port: PORT,
        progress: true,
    },
    plugins: [
        new webpack.DefinePlugin(envKeys),
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            DEBUG: true
        }),
    ]
})
