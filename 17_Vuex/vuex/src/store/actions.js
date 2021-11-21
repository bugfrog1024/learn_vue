export default {
  //方法一
  // aUpdateInfo(context, payload) {
  //   setTimeout(() => {
  //     context.commit('updateInfo')
  //     console.log(payload.message);
  //     payload.success()
  //   }, 1000)
  // }
  //更优雅的方法
  aUpdateInfo(context, payload) {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo')
        console.log(payload)
        resolve('回调成功的参数')
      }, 1000)
    }))
  }
}
