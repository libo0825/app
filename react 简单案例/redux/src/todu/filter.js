

const filterStr =(state=[],actions)=>{
	switch(actions.type){
		case 'SET_FILTER':
			return actions.filterStr
		break;
		

		default:
			return state
	}
}
export default filterStr