import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css';
class BusinessList extends React.Component {

	render() {
		const list = this.props.businesses ? this.props.businesses : [];
		return (
		<div className="BusinessList">
		{
			list.map(business => {
				return <Business business={business} key={business.id} />
			})
		}
		</div>
		);
	}
}

export default BusinessList