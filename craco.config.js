import path from 'path'
const CracoLessPlugin = require('craco-less')

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  plugins: [{
    plugin: CracoLessPlugin
  }],
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
      'pages': resolve('pages')
    }
  }
}