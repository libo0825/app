<template>
<div>
	<div>父级: <input type="text" v-model='value'></div>
	<Fn2 :val='value' @changefuji='change'></Fn2>
</div>
	
	
</template>

<script>
import Fn2 from './ziji'
export default{
	data(){
		return{
			value:''
		}
	},
	components:{
		Fn2
	},
	methods:{
		change(a){
			this.value=a
		}
	}
}
</script>

<style scoped>

</style>