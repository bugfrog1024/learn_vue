import axios from 'axios'

// export function request(config) {
//   return new Promise(((resolve, reject) => {
//     //创建axios实例
//     const axios_instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     //发送网络请求
//     axios_instance(config)
//       .then(res => {
//         resolve(res);
//       })
//       .catch(err => {
//         reject(err)
//       })
//   }))
// }

export function request(config) {
  //1.创建axios实例
  const axios_instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //2(1).axios请求拦截
  axios_instance.interceptors.request.use(config => {
    console.log(config, '一些处理');
    //拦截之后要返回，否则无法继续请求
    return config
  }, err => {
    console.log(err);
  })
  //2(2).axios响应拦截
  axios_instance.interceptors.response.use(res => {
    console.log(res, '一些处理');
    //拦截之后要返回，否则无法获取响应
    return res.data
  }, err => {
    console.log(err);
  })
  //3.发送网络请求，返回值是一个Promise
  return axios_instance(config)
}
