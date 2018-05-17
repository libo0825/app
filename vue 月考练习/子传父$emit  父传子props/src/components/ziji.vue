<template>
	
	<div>子级: <span v-text='val'></span><br>在子级输入内容改变父级<input type="text" v-model='son'><button @click='fn'>改变</button></div>
</template>

<script>
export default{
	props:['val'],
	data(){
		return {
			son:''
		}
	},
	methods:{
		fn(val){
			this.$emit('changefuji',this.son)
		}
	}
}
</script>

<style scoped>

</style>