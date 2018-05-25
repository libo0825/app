<template>
	<div class="address">
		<h2>账户设置</h2>
		<router-link to='/err' tag='p'><span>会员俱乐部</span><span>></span></router-link>
		<router-link to='/err' tag='p'><span>PLUS会员</span>   <span>></span></router-link>
		<router-link to='/err' tag='p'><span>小白信用</span>   <span>></span></router-link>
		<router-link to='/address' tag='p'><span>地址管理</span>   <span>></span></router-link>
	</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.address{
	width: 300px;
	height: 500px;
	border: 1px solid #000;
	margin:50px auto;
}
h2{
	text-align: center;
	padding: 15px 0;
	border: 1px solid #ccc;
}
p{
	display: flex;
	justify-content: space-between;
	padding: 15px 5px;
	border: 1px solid #ccc;
	cursor: pointer;
}
</style>