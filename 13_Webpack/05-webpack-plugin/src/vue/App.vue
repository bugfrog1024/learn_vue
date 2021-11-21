<template>
  <div>
    <h2 class="title">{{msg}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  //这里可以import其他vue组件
  export default {
    name: "App",
    data() {
      return {
        msg: 'Hello'
      }
    },
    methods: {
      btnClick() {
        console.log('ok');
      }
    }
  }
</script>

<style scoped>
.title {
  color: yellow;
}
</style>