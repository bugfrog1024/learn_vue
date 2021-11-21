<!--App.vue-->
<template>
  <div id="app">
    <!--<router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
    <!--<router-link to="/about" tag="button" active-class="active">关于</router-link>-->
    <!--<button @click="homeClick">首页</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="/user/+userId">用户</router-link>
    <!--<button @click="userClick">用户</button>-->
    <router-link :to="{path:'/profile', query: {name: 'Perry', age: 22}}">档案</router-link>
    <!--<button @click="profileClick">档案</button>-->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'Perry'
    }
  },
  methods: {
    homeClick() {
      this.$router.push('/home')
    },
    userClick() {
      this.$router.push('/user/'+this.userId)
    },
    profileClick() {
      this.$router.push({
        path:'/profile',
        query: {name: 'Perry', age: 22}
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active{
  color: red;
}
</style>
