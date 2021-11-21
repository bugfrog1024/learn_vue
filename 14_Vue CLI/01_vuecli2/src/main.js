// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  el: '#app',
  render: function (createElement) {
    //1.传入标签：createElement(标签,{标签的属性},[标签的内容])
    // return createElement('h2', {class:'box'}, ['Hello World', createElement('button', ['按钮'])])
    //2.传入组件：createElement(组件)
    return createElement(App)
  }
})
