const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = WebpackMerge(baseConfig, {
  devServer: {
    //为哪个目录提供本地服务，默认是根目录
    contentBase: './dist',
    //是否实时刷新页面
    inline: true,
    //服务端口号，默认8080
    port: 8080
  }
})