const fs      = require('fs')
const webpack = require('webpack')

// Plugins
const path  = require('path')

// Paths
const paths = require('./paths')

module.exports = {
    output: {
        path: paths.dirDist
    },
    stats: 'none',
}
      