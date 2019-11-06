import _ from 'lodash';
import intrinio from '../apis/intrinio';

export const fetchCompanies = () =>  async dispatch => {
	const response = await intrinio.get('/companies');
	
	dispatch({ type: 'FETCH_COMPANIES', payload: response.data.companies });
};

// export const fetchPrices = (ticker) => async dispatch => {
// 	const response = await intrinio.get(`/securities/${ticker}/prices`);

// 	dispatch({ type: 'FETCH_PRICES', payload: response.data });
// };

export const fetchDetail = (ticker) => dispatch => _fetchDetail(ticker,dispatch);
const _fetchDetail = _.memoize(async (ticker, dispatch) => {
	const response = await intrinio.get(`/companies/${ticker}`);

	dispatch({ type: 'FETCH_DETAIL', payload: response.data });
});
