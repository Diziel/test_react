import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CompaniesList from './CompaniesList';
import CompaniesDetail from './CompaniesDetail';
import Header from './Header';

const App = () => {
	return (
		<div className="ui container">
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={CompaniesList} />
					<Route path="/companies" exact component={CompaniesDetail} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;