import { combineReducers } from 'redux';
import companiesReducer from './companiesReducer';
import detailsReducer from './detailsReducer';

export default combineReducers({
	companies: companiesReducer,
	details: detailsReducer
});