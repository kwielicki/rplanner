const webpack = require('webpack');
const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = env => {
	return {
		entry: {
            app: './src/index.js'
        },
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
			historyApiFallback: true,
			overlay: true,
			https: true
		},
		resolve: {
			extensions: ['*', '.js', '.jsx'],
			alias: {
				'@assets': resolve(__dirname, './src/assets/'),
				'@components': resolve(__dirname, './src/components/'),
				'@routes': resolve(__dirname, './src/Routes/'),
				'@actions': resolve(__dirname, './src/actions/'),
				'@reducers': resolve(__dirname, './src/reducers/'),
				'@translations': resolve(__dirname, './src/consts/translations')
			}
		},
		output: {
			path: resolve(__dirname, './build'),
			publicPath: '/build/',
			filename: '[name].bundle.js'
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
                title: 'Production [Title]',
                meta: {
                    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
                    charset: 'utf-8'
                },
                template: 'index.html'
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