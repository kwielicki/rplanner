const path  = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackEnvs = path.resolve(__dirname, 'webpack-envs')
const paths = require(path.resolve(webpackEnvs, 'paths.js'))
const srcDir = paths.dirSrc
const rootPath = paths.rootPath

module.exports = {
    entry: {
        app: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },{
                test: /\.svg$/,
                use: { loader: '@svgr/webpack' }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            'Root': path.join(rootPath),
            'Assets': path.join(srcDir, '/assets'),
            'Firebase': path.join(srcDir, '/firebase'),
            'Components': path.join(srcDir, '/components'),
            'Pages': path.join(srcDir, '/Pages'),
            'Actions': path.join(srcDir, '/actions'),
            'Reducers': path.join(srcDir, '/reducers'),
            'Translations': path.join(srcDir, '/const/translations'),
            'Bunches': path.join(srcDir, '/const/bunches'),
            'Versions': path.join(srcDir, '/const/versions'),
            'FontAwesome': path.join(srcDir, '/fontAwesome'),
            'Utils': path.join(srcDir, '/utils'),
            'Hooks': path.join(srcDir, '/hooks'),
            'Constants': path.join(srcDir, '/_constants')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
            favicon: './dist/favicon.png',
            template: path.resolve(__dirname, 'dist/index.html')
        })
    ],
    output: {
        filename: '[name].bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    stats: {
        builtAt: true,
        env: true,
        performance: true
    },
}
