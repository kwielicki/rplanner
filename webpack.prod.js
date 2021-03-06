const webpack = require('webpack')
const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BrotliPlugin = require('brotli-webpack-plugin');
const path = require('path')
const webpackCommon = require('./webpack.common.js')
const Dotenv = require('dotenv-webpack');

// Paths
const WebpackPwaManifest = require('webpack-pwa-manifest')

// Env variables
module.exports = merge(webpackCommon, {
    mode: 'production',
    entry: './src/index.js',
    devtool: '', // Removed dev-tools mapping
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        }
    },
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new Dotenv({
            systemvars: true
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new WebpackPwaManifest({
            name: 'Wedding planner',
            short_name: 'Wedding planner',
            description: 'Application for managing wedding preparations',
            background_color: '#333333',
            theme_color: '#e9204f',
            display: "standalone",
            orientation: "portrait",
            Scope: "/",
            start_url: "/",
            crossorigin: 'use-credentials',
            splash_pages: null,
            icons: [
                {
                    src: path.resolve('src/assets/pwa/manifest/icons/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512]
                },
            ]
        }),
        new BrotliPlugin({
			asset: '[path].br[query]',
			test: /\.(js|css|html|svg|png|jpg)$/,
			threshold: 10240,
			minRatio: 0.8
		})
    ],
    module: {
        rules: [
        { 
            test: /\.s[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
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
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'assets',
                    }
                }
            ]
        }]
    }
})
