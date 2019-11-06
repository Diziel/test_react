export default (state = [], action) => {
	switch (action.type) {
		case 'FETCH_DETAIL':
			return [...state, action.payload];
		default: 
			return state;
	}
};
