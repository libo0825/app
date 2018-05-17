export default (state=[],action)=>{
	switch(action.type){
		case 'DATA1':
			return action.data;
		
		default:
			return state
	}
}