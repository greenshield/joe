const temp = (state = {}, action) => {
	switch (action.type) {
		case 'SET_TEMP':					
			return action.temp
		default:
			return state
	}
}

export default temp