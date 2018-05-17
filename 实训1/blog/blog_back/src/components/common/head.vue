<template>
  <div>
    <h3>个人博客后台管理系统</h3>
    <p>姓名：{{username}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ""
    }
  },
  mounted() {
    this.username = sessionStorage.getItem("username")
  }
}
</script>

<style scoped>
div {
  height: 5%;
  background: lightblue;
  overflow: hidden;
  line-height: 50px;
  padding: 0 20px;
}

div h3 {
  float: left
}

div p {
  float: right
}
</style>
