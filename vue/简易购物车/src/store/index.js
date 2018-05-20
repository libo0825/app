import Vue from 'vue';
import vuex from 'vuex'
Vue.use(vuex)
export default new vuex.Store({

	state:{
		data:[],
		count:0,
		price:0,
		flg:false
	},
	actions:{
        
		getData({commit},data){
			commit('getData',data)
		},
		addCount({commit},ind){
			commit('addCount',ind)

		},
		lessenCount({commit},ind){
			commit('lessenCount',ind)
		},
		click({commit},ind){
			commit('click',ind)
		},
		allClick({commit},f){
			commit('allClick',f)
		}
	},
	mutations:{
		getData(state,data){
			state.data=data
		},
		addCount(state,ind){
			let c=0,p=0;
			let f=true;
			state.data[ind].count++;
			state.data[ind].flag=true;
			state.data.forEach((v,i)=>{
				if(v.flag){
					c+=v.count;
					p+=v.count*v.price
				}
			})
			state.count=c;
			state.price=p;
			for(let i=0;i<state.data.length;i++){
				if(state.data[i].flag==false){
					f=false
				}
			}
			state.flg=f
		},
		lessenCount(state,ind){
			let c=0,p=0;
			let f=true;
			
			if(state.data[ind].count>1){
				state.data[ind].flag=true;
				state.data[ind].count--
				state.data.forEach((v,i)=>{
					if(v.flag){
						c+=v.count;
						p+=v.count*v.price
					}
				})
				state.count=c;
				state.price=p
				for(let i=0;i<state.data.length;i++){
					if(state.data[i].flag==false){
						f=false
					}
				}
				state.flg=f
			}
		},
		click(state,ind){
			let f=true;
			state.data[ind].flag=!state.data[ind].flag
			if(state.data[ind].flag){
				state.count+=state.data[ind].count
				state.price+=state.data[ind].count*state.data[ind].price
			}else{
				state.count-=state.data[ind].count
				state.price-=state.data[ind].count*state.data[ind].price
			}

			for(let i=0;i<state.data.length;i++){
				if(state.data[i].flag==false){
					f=false
				}
			}
			state.flg=f
		},
		allClick(state,f){
			state.flg=f
			let c=0,p=0;
			state.data.forEach((v,i)=>{
				v.flag=f
			})
			if(f){
				state.data.forEach((v,i)=>{
					if(v.flag){
						c+=v.count;
						p+=v.count*v.price
					}
				})
				state.count=c;
				state.price=p
			}else{
				state.count=0;
				state.price=0
			}
			
			
		}


	},
	getters:{

	}
})