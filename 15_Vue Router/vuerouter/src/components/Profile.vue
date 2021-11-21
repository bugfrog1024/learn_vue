<!--components/Profile.vue-->
<template>
  <div>
    <h2>个人中心</h2>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>
