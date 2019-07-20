const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolve } = require('path');

module.exports = {
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
							import: true,
							modules: {
								mode: 'local',
								localIdentName: '[local]____[hash:base64:5]',
								hashPrefix: 'planner',
							}
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							sourceMapContents: true,
							includePaths: ['./src']
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
		extensions: ['*', '.js', '.jsx']
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
		})
	]
};
