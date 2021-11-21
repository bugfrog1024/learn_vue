<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户{{userId}}的相关信息</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId() {
        return this.$route.params.userId
      }
    }
  }
</script>

<style scoped>

</style>
