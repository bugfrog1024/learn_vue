<!--components/Home.vue-->
<template>
  <div>
    <h2>主页</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        path: '/home/news'
      }
    },
    //在该组件被激活的时候调用，activated和deactivated只有该组件被<keep-alive>保持了状态时才会生效
    activated() {
      this.$router.push(this.path)
    },
    //组件内的导航守卫，在即将离开该组件对应的路由时调用
    beforeRouteLeave(to, from, next) {
      this.path = this.$route.path
      next()
    }
  }
</script>

<style scoped>

</style>
