<template>
  <div id="app">
      <div class="top">
          <span class="a"><</span><span class="b">选择城市</span>
      </div>
      <div class="mid">
          <span class="c">您的上牌地址</span><span class="d">></span>
      </div>
      <div class="bot">
          <b>您已选择城市</b>
      </div>
      <List1/>
      <div class="bot">
          <b>请选择城市</b>
      </div>

      <List2/>
  </div>
</template>

<script>
import List1 from '@/components/List1'
import List2 from '@/components/List2'
export default {
  name: 'App',
  components:{
    List1,
    List2
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
body,html{
  width: 100%;
  height: 100%
}
#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.top{
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #00f;
  color: #fff;
  display: flex;
}
.a{
  width: 10%;
  text-align: center;
}
.mid{
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
}
.c{
  width: 90%;
  padding-left: 15px;
}
.bot{
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
}
</style>
