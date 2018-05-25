<template>
	<div>
		<div class="aa">
			<div class="ff"><input type="checkbox" class="f1" v-model="item.flag" @click='danji'></div>
			<div v-text='item.title' class="bb"></div>
			<div class="cc"> <img :src="item.src" alt=""></div>
			<div v-text='item.price' class="dd"></div>
			<div class="ee">
				<button class="e1" @click='jian'>-</button>
				<input type="text" class="e3" v-model='item.count'>
				<button class="e2" @click='add'>+</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props:['item','ind','data'],
	data(){
		return {
			allsum:0,
			allcount:0
		}
	},
	methods:{
		jian(){
			if(this.item.count<=0){
				this.item.count=0;			
			}else{
				this.item.count--;
				if(this.item.flag){
					this.bus.$emit('jian',{price:this.item.price*1,count:1})
				}
			}
		},
		add(){
			this.item.count++
			if(this.item.flag){
				this.bus.$emit('add1',{price:this.item.price*1,count:1})
			}
		},
		danji(){
			if(this.item.flag){
				this.bus.$emit('danji1',{price:this.item.price*this.item.count,count:this.item.count})
			}else{
				this.bus.$emit('danji2',{price:this.item.price*this.item.count,count:this.item.count})
			}
		}
	},
	created(){
		let num=0;
		let con=0;
		this.bus.$on('quanxuan',(data)=>{
			this.item.flag=data;
			this.data.forEach((a,b)=>{
				if(a.flag){
					num+=(this.data[b].count*this.data[b].price)
					con+=this.data[b].count;
					this.bus.$emit('quanxuan2',{price:num,count:con})
				}else{
					num=0;
					con=0;
					this.bus.$emit('quanxuan2',{price:num,count:con})
				}
				
			})
		})
	}
}
</script>
<style scoped>
	.aa{
		display: flex;
		width: 100%;
		align-items: center;
		padding: 10px 0;
	}
	.ff{
		width: 10%;
		text-align: center;
	}
	.bb{
		width: 30%;
		padding: 5px;
	}
	.cc{
		width: 20%;
		height: 70px;
	}
	.cc img{
		width: 100%;
		height: 100%;
	}
	.dd{
		width: 10%;
		text-align: center;

	}
	.ee{
		width: 30%;
		display: flex;
		align-items: center;

	}
	.e1,.e2{
		width: 30px;
		height: 30px;
		text-align: center;
		line-height: 30px;
	}
	.e3{
		width: 30px;
		height: 25px;
		text-align: center;
	}
</style>