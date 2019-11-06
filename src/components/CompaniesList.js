import React from 'react';
import { connect } from 'react-redux';
import { fetchCompanies } from '../actions';
import CompaniesDetail from './CompaniesDetail';

class CompaniesList extends React.Component {
	componentDidMount() {
		this.props.fetchCompanies();
	}

	renderList() {
		return this.props.posts.map(post => {
			return (
				<div className="item" key={post.id}>
					<div className="content">
						<div className="description">
							<h2>{post.name}</h2>
							<p>{post.ticker}</p>
						</div>
						<CompaniesDetail ticker={post.ticker}/>
					</div>
				</div>
			);
		});
	}

	render(){
		return <div className="ui relaxed divided list">{this.renderList()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { posts: state.companies };
};

export default connect(mapStateToProps, { fetchCompanies })(CompaniesList);