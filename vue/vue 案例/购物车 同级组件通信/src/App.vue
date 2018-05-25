<template>
  <div id="app">

      <router-view/>
      <div class="footer">
        <router-link to="/">首页</router-link>
        <router-link to="/mine">个人</router-link>
        <router-link to="/list">购物车</router-link>
        <router-link to="/me">我</router-link>
      </div>
      
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
  color:#000;
}
body,html{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
}
.footer{
  border-top: 1px solid #000;
  height: 40px;
  line-height: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
