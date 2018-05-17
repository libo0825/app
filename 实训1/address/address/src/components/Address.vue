<template>
	<div class="address">
		<h2 class="a">收货地址管理</h2>
		<div class="main">
			<div class="list" v-for='(item,index) in list'>
				<p class="top">
					<span class="name" v-text='item.names'></span><span class="phone" v-text='item.phone'></span><span class="add" v-text='item.address'></span>
				</p>
				<p class="bot">
					<span>
						<input type="checkbox" :checked='(item.flg==0?false:true)' >默认地址
					</span>
					<span>
						<i @click='bianji(item)'>编辑</i>
						<i @click='del1(item.id)' class="red">删除</i>
					</span>
				</p>
			</div>
		</div>
		<h2 class="b" @click='add'>添加地址</h2>
		<div class="log" v-show="flag">
			<h3>确定删除这个地址吗？</h3>
			<p><i @click='quxiao'>取消</i><i class="red" @click='del2'>确定</i></p>
		</div>
		<div class="zhe" v-show="flag"></div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			list:[],
			flag:false
		}
	},
	methods:{
		del1(id){
			this.flag=true
			sessionStorage.setItem('delid',id)
		},
		del2(){
			this.axios.post('/api/jiekou/del',{id:sessionStorage.getItem('delid')}).then(data=>{
				this.$message({
						message:'删除成功！',
						type: 'success'
				});
				this.list=data.data.list;
				this.flag=false
			})
		},
		quxiao(){
			this.flag=false
		},
		add(){
			this.$router.push('/add')
		},
		bianji(data){
			sessionStorage.setItem('id',data.id)
			sessionStorage.setItem('names',data.names)
			sessionStorage.setItem('address',data.address)
			sessionStorage.setItem('phone',data.phone)
			this.$router.push('/bianji')
		}
	},
	created(){
		this.axios.post('/api/jiekou/list').then(data=>{
			this.list=data.data
		})
	}

}
</script>

<style scoped>
.address{
	width: 300px;
	height: 500px;
	border: 1px solid #000;
	margin:50px auto;
	position: relative;
}
i{
	width: 50px;
	height:30px;
	text-align: center;
	line-height: 30px;
	border: 1px solid #e6e6e6;
	color:#989898;
	font-style: normal;
	border-radius: 3px;
	display:inline-block;
	cursor: pointer;
}
.zhe{
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.4);
	position: absolute;
	left: 0;
	top: 0;
	z-index: 998
}
.red{
	background-color: #f00;
	color: #fff;
}
.log{
	position: absolute;
	left: 0;
	top: 0;
	left: 50px;
	top: 200px;
	background-color: #fff;
	border: 1px solid #000;
	width: 200px;
	height: 100px;
	z-index: 9999
}
.log h3{
	width: 100%;
	text-align: center;
	padding: 10px;
}
.log p{
	display: flex;
	width: 100%;
	justify-content: space-around;
	padding: 10px
}
.main{
	height: 420px;
	overflow-y: scroll;
		margin:40px 0;
}
h2{
	text-align: center;
	height: 40px;
	line-height: 40px;
	border: 1px solid #ccc;
	background-color: #fff;
}
.top{
	width: 100%;
	display: flex;
	padding: 0 5px;
	border: 1px solid #e8e8e8;
	flex-wrap: wrap;

}
.name{
	width: 20%;
	text-align: center;
	padding: 10px 0;
}
.phone{
	flex:80%;
	padding: 10px 0;
}
.add{
	width: 100%;
	padding: 10px 5px;
}
.bot{
	display: flex;
	justify-content: space-between;
	padding: 10px 5px;
	border: 1px solid #e3e3e3;
}
.list{
	margin-bottom: 5px;


}
.a{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}
.b{
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;

}
</style>