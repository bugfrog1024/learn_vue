const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //在url前面加上路径
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片小于limit时，url-loader会将图片编译成base64字符串形式；当大于limit时，会调用file-loader模块进行处理
              limit: 100000,
              //配置打包的图片名字
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
      {
        test: /\.js$/,
        //不需要转化node_modules、bower_components目录下的js文件
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: [ 'vue-loader' ]
      },
    ]
  },
  resolve: {
    //配置使用runtime-compiler版本的vue
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    //配置可以在引入哪些类型的文件时省略扩展名
    extensions: ['.js','.css','.vue']
  }
}