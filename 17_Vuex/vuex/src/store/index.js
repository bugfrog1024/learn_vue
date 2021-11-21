import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//1.安装插件
Vue.use(Vuex)

const state = {
  counter: 0,
  students: [
    {name: 'Perry', age: 19},
    {name: 'Bob', age: 20},
    {name: 'Alice', age: 21}
  ],
  info: {
    name: 'lpr',
    age: 22,
    height: 1.58
  }
}

//2.创建对象
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    a: moduleA,
    b: moduleB
  }
})

//3.导出
export default store
