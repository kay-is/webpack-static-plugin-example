const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

const data = {
  routes: [
    {url: '/', title: 'Home'},
    {url: '/about', title: 'About'},
  ]
}

const staticChunk = 'static'

const static = new StaticSiteGeneratorPlugin(staticChunk, data.routes.map(r => r.url), data)

module.exports = {

  entry: {
    main: './src/client.js',
    [staticChunk]: './src/static.js',
  },

  output: {
    filename: '[name].js',
    path: 'build',
    libraryTarget: 'umd',
  },

  plugins: [static],

}