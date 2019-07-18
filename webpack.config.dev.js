var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ReactToHtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: './src/index.js',
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
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	  },
	  devServer: {
		contentBase: './dist'
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
