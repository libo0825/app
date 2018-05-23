

export default (state=[],action)=>{
	switch(action.type){
		case 'ADD':
				state[action.ind].count+=1
				let newState=[...state]
				return newState
			
		case 'JIAN':
			if(state[action.ind].count<=0){
				return state
			}else{
				state[action.ind].count-=1
				let newState=[...state]
				return newState
			}
		case 'QUANXUAN':

			action.data.forEach((a,b)=>{
				a.flag=true
			})
			let newStat=[...action.data]
			return newStat
		case 'BUXUAN':

			action.data.forEach((a,b)=>{
				a.flag=false
			})
			let newSta=[...action.data]
			return newSta
		case 'DANJI':
			state[action.ind].flag=!state[action.ind].flag
			
			let newSt=[...state]
			return newSt
			
		case 'DATA':
			return action.data
		default:
			return state
	}
	
}