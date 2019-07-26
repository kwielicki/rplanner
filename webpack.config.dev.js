const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require('path');
const config = env => {
	return {
		entry: './index.js',
		context: __dirname,
		node: {
			fs: 'empty'
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
						loader: "html-webpack-plugin"
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
									context: resolve(__dirname, 'src'),
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
								name(file) {
									if ( process.env.NODE_ENV === 'development' ) {
										return '[path][name].[ext]'
									}
									return '[hash].[ext]'
								}
							}
						}
					]
				}
			]
		},
		devServer: {
			port: 8080,
			historyApiFallback: true
		},
		resolve: {
			extensions: ['*', '.js', '.jsx'],
			alias: {
				'assetsAlias': resolve(__dirname, './src/assets/')
			}
		},
		output: {
			path: resolve(__dirname, './build'),
			publicPath: '/build/',
			filename: 'bundle.js'
		},
		plugins: [
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
			})
		],
		stats: {
			// Add build date and time information
			builtAt: true,
			env: true,
			performance: true
		}
	}
};

module.exports = config;