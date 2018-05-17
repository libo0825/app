<template>
	<div class="box2">
		<p v-for='(item,index) in city' v-text='item.name' @click='fn(item.name,index)' class="pp"></p>
	</div>
</template>

<script>
export default {
	data(){
		return{
			city:[],
			list:[]
		}
	},
	methods:{
		fn(value,ind){
			this.bus.$emit('send',{value,ind})
			

		}
	},
	created(){
		let that=this
		this.axios.get('/mock').then((res)=>{
			this.city=res.data.province

		})

		this.bus.$on('change',function(val){
			let pp=document.querySelectorAll('.pp')
			that.city.forEach((a,b)=>{
				if(a.name==val){
					pp[b].style.outline='0'
				}
			})


		})
		this.bus.$on('color',function(val){
			let pp=document.querySelectorAll('.pp')
			if(val.flag){
				pp[val.ind].style.outline='1px solid #f00'
			}else{
				pp[val.ind].style.outline='0'

			}
		})
	}
}
</script>

<style scoped>
.box2{
	width: 100%;
	overflow-x:hidden; 
	display: flex;
	flex-direction: column;
}
.box2 p{
	width: 40%;
	text-align: center;
	margin:10px auto;

}
</style>