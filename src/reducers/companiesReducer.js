export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_COMPANIES':
			return action.payload;
		default: 
			return state;
	}
};
