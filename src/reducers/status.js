const status = (state = 'pending', action) => {
	switch (action.type) {
		case 'SET_STATUS':					
			return action.status
		default:
			return state
	}
}

export default status