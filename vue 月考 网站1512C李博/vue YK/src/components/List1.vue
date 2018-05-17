<template>
	<div class="box">
		<p v-for='item in city' v-text='item' class="p" @click='change(item)'></p>
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
		change(val){
			this.bus.$emit('change',val)
			let arr=[];
			for(var i=0;i<this.city.length;i++){
				if(this.city[i]!==val){
					arr.push(this.city[i])
				}
			}
			this.city=arr
		}
	},
	created(){
		let that=this
		this.axios.get('/mock').then((res)=>{
			this.city.push(res.data.province[0].name)
		})

		this.bus.$on('send',function(val){
			
			let flag=true
			
			for(var i=0;i<that.city.length;i++){
				if(that.city[i]==val.value){
					flag=false
				}
			}
			let ind=val.ind
			if(flag){
				that.city.push(val.value)
				this.bus.$emit('color',{flag,ind})
			}else{
				let arr=[];
				this.bus.$emit('color',{flag,ind})
				for(var i=0;i<that.city.length;i++){
					if(that.city[i]!==val.value){
						arr.push(that.city[i])
					}
				}
				that.city=arr
			}
			
		})

	}
}
</script>

<style scoped>
.box {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	overflow-x:hidden; 
}
.p{
	width: 33.33%;
	text-align: center;
	height: 30px;
	line-height: 30px;
}
</style>