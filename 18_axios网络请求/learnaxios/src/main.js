import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//使用全局的axios和对应配置进行网络请求
//基本使用
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res)
})

axios({
  url: 'http://123.207.32.32:8000/home/data',
  //get请求专用的参数拼接
  params: {
    type: 'sell',
    page: 3
  }
}).then(res => {
  console.log(res)
})

//并发请求
axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})]).then(res => {
  console.log(res[0]);
  console.log(res[1]);
})

//配置信息
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000
axios({
  url: '/home/multidata',
}).then(res => {
  console.log(res)
})

//创建axios实例
const axios_instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})
axios_instance1({
  url: 'http://123.207.32.32:8000/home/data'
}).then(res => {
  console.log(res);
})

//封装axios模块
import {request} from './network/request'
request({
  url: '/home/data',
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
