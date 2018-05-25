import Vue from 'vue';
import vuex from 'vuex'
Vue.use(vuex)
export default new vuex.Store({
	state:{
		data:null,
		count:0,
		price:0,
		flg:false
	},
	actions:{
		getData({commit},data){
			commit('getData',data)
		},
		addcount({commit},ind){
			commit('addcount',ind)

		},
		delcount({commit},ind){
			commit('delcount',ind)
		},
		danji({commit},ind){
			commit('danji',ind)
		},
		quanX({commit},f){
			commit('quanX',f)
		}
	},
	mutations:{
		getData(state,data){
			state.data=data
		},
		addcount(state,ind){
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
		delcount(state,ind){
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
		danji(state,ind){
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
		quanX(state,f){
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