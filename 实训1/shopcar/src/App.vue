<template>
  <div id="app">
    <router-view/>
    <div class="foot">
    	<router-link to='/home' active-class='active'>首页</router-link>
	    <router-link to='/details' active-class='active'>详情</router-link>
	    <router-link to='/shopcar' active-class='active'>购物车</router-link>
	    <router-link to='/me' active-class='active'>我</router-link>
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
}
.active{
	color:#f00;
}
#app,html,body{
	width: 100%;
	height: 100%;
}
#app{
	position: relative;
}
.foot{
	display: flex;
	justify-content:space-around;
	height: 40px;
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	line-height: 40px;
	border-top: 1px solid #ccc;
}
</style>
