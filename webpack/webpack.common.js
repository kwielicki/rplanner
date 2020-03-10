// Plugins
const path  = require('path')

// Paths
const paths = require('./paths')
const srcDir = paths.dirSrc

module.exports = {
    output: {
        path: paths.dirDist
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
            'FontAwesome': path.join(srcDir, '/fontAwesome'),
            'Utils': path.join(srcDir, '/utils')
        }
    },
    stats: 'none',
}
