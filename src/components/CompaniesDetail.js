import React from 'react';
import { connect } from 'react-redux';
import { fetchDetail } from '../actions';

class CompaniesDetail extends React.Component {
	componentDidMount() {
		this.props.fetchDetail(this.props.ticker)
	}

	render() {
		const { detail } = this.props;
		console.log(detail);
		if (!detail) {
			return null;
		}
		return <div className="header">{detail.legal_name}</div>;
	}

}

const mapStateToProps = (state, ownProps) => {
	return { detail: state.details.find((detail) => detail.ticker == ownProps.ticker) };
};
export default connect(mapStateToProps, { fetchDetail })(CompaniesDetail);