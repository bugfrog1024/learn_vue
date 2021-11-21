<!--App.vue-->
<template>
  <div id="app">
    <h2>-----App-----</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">更新info</button>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <button @click="asyncUpdateName">异步更新name</button>
    <button @click="updateName">更新name</button>
    <h2>-----App:mutations-----</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu()">addStu</button>
    <h2>-----App:getters-----</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(18)}}</h2>
    <h2>-----HelloVuex-----</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'
  import {
    INCREMENT
  } from './store/mutations-types'
  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        msg: '我是App组件',
        counter: 0
      }
    },
    methods: {
      add() {
        //提交mutation
        this.$store.commit(INCREMENT)
      },
      sub() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        //1.普通的提交风格
        // this.$store.commit('incrementCount', count)
        //2.特殊的提交风格
        this.$store.commit({
          type: 'incrementCountSpec',
          count
        })
      },
      //如果需要传递多个参数，放到一个对象中统一传
      addStu() {
        const stu = {name: 'Mary', age: 23}
        this.$store.commit('addStu', stu)
      },
      updateInfo() {
        // this.$store.commit('updateInfo')
        //方法一
        // this.$store.dispatch('aUpdateInfo', {
        //   message: '携带信息',
        //   success: () => {
        //     console.log('成功');
        //   }
        // })
        //更优雅的方法
        this.$store
          .dispatch('aUpdateInfo', '携带信息')
          .then(res => {
            console.log('成功');
            console.log(res);
          })
      },
      updateName() {
        this.$store.commit('updateName', 'lpr')
      },
      asyncUpdateName() {
        this.$store.dispatch('aUpdateName')
      }
    }
  }
</script>

<style>

</style>
