<template>
	<div class="box2">
		<div v-for='(item,index) in city' class="nav">
			<h2 v-text='item.letter'></h2>
			<p v-for='(i,ind) in item.city' v-text='i.name' class="pp" @click='fn(i.name,index,ind)'></p>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			city:[]
		}
	},
	methods:{
		fn(value,index,ind){
			this.bus.$emit('send',{value,index,ind})
		}
	},
	created(){
		let that=this
		
		this.axios.get('/mock').then((res)=>{
			this.city=res.data
		})
		this.bus.$on('change',function(val){
			
			let pp=document.querySelectorAll('.pp')
			pp.forEach((a,b)=>{
				if(val==a.innerHTML){
					pp[b].style.outline='0'
				}
			})
		})
		
		this.bus.$on('color',function(val){
			let nav=document.querySelectorAll('.nav')[val.index]
			let pp=nav.querySelectorAll('.pp')
			
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
.box2 h2{
	text-align: center;
}
</style>