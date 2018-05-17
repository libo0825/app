export default (state=[],action)=>{
	switch(action.type){
		case 'DATA':
			return action.data;
		case 'ADD':
			action.data[action.ind].count+=1
			//console.log(action.data[action.ind].count)
			return [...action.data];
		case 'JIAN':
			if(action.data[action.ind].count>=1){
				action.data[action.ind].count-=1
				return [...action.data];
			}else{
				return action.data
			}
		default:
			return state
	}
}