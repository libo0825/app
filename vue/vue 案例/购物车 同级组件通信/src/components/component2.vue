<template>
	<div class="aa">
		<div><input type="checkbox" @click='fn' class="qx"><span v-text='text'>全选</span></div>
		<div>总数量：<span v-text='count'></span> </div>
		<div>总价：<span v-text='price'></span></div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			price:0,
			count:0,
			flag:false,
			text:'全选'
		}
	},
	created(){
		this.bus.$on('add1',(data)=>{
			this.price+=data.price;
			this.count+=data.count;
		})
		this.bus.$on('jian',(data)=>{
			this.price-=data.price
			this.count-=data.count;
		})
		this.bus.$on('danji1',(data)=>{
			this.price-=data.price
			this.count-=data.count;
		})
		this.bus.$on('danji2',(data)=>{
			this.price+=data.price
			this.count+=data.count;
		})
		this.bus.$on('quanxuan2',(data)=>{
			this.price=data.price
			this.count=data.count;
		})
	},
	methods:{
		fn(){
			this.flag=!this.flag;
			this.bus.$emit('quanxuan',this.flag)
		}
	}
}
</script>
<style scoped>
	.aa{
		width: 100%;
		display:flex;
		justify-content: space-around;
	}
</style>