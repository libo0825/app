
 const list=(state=[
		{text:'写作业',status:0}
	],actions)=>{
	switch(actions.type){
		case 'ADD':
			return state.concat({
				text:actions.text,
				status:0
			})
				break;
		case 'ACTIONS':
			state[actions.actions].status=1
			let newState=[...state]
			return newState
			
				break;
			default:
				return state
	}
}

export default list
