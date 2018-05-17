<template>
  <div class="addlist">
  	<h2 class="a">新建收货地址</h2>
  	<div class="main">
	  	<p><span>收货人：</span><input type="text" v-model='names'></p>
	  	<p><span>手机号码：</span><input type="text" v-model='phone'></p>
	  	<p><span>收货地址：</span><input type="text" v-model='address'></p>
	  		
  	</div>
  	<h2 class="b" @click='submit'>保存</h2>
  </div>
</template>

<script>
export default {
   data(){
   	 return{
   	 	names:'',
   	 	phone:'',
   	 	address:''
   	 }
   },
   methods:{
   		submit(){
   			if(this.names&&this.phone&&this.address){
   				this.axios.post('/api/jiekou/add',{names:this.names,phone:this.phone,address:this.address}).then(data=>{
	   				if(data.data.code==1){
	   					this.$message({
							message:data.data.msg,
							type: 'success'
						});
	   					this.$router.push('/address')
	   				}else{
	   					this.$message({
							message:data.data.msg,
							type: 'error'
						});
	   				}
	   			})
   			}else{
   				alert('不能为空！')
   			}
   			
   		}
   }
}
</script>

<style scoped>
.addlist{
	width: 300px;
	height: 500px;
	border: 1px solid #000;
	margin:50px auto;
	position: relative;
}

h2{
	text-align: center;
	height: 40px;
	line-height: 40px;
	border: 1px solid #ccc;
}
.a{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}
.main{
	margin:40px 0;
}
.b{
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	cursor: pointer;
}
p{
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #ccc;
	display: flex;
}
p input{
	height: 80%;
	align-self: center;
	border: 0;
	outline: 0;
	width: 60%;
}
p span{
	width: 30%;
	padding-left: 5px;
}
.red{
	background-color: #f00;
}
</style>