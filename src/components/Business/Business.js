import React from 'react';
import './Business.css';

class Business extends React.Component {
	
	get reviews () {
		return this.props.business.review_count;
	}
	get stars () {
		return this.props.business.rating;
	}
	get location() {
		return this.props.business.location;
	}
	
	get category() {
		return this.props.business.category;
	}
	
	get img() {
		return this.props.business.imageSrc;
	}
	get name() {
		return this.props.business.name;
	}
	render() {
		return (
			<div className="Business">
			  <div className="image-container">
				<img 
					src={this.img}
					alt=""/>
			  </div>
			  <h2>{this.name}</h2>
			  <div className="Business-information">
				<div className="Business-address">
				  <p>{this.location.address}</p>
				  <p>{this.location.city}</p>
				  <p>{this.location.state} {this.location.zip_code}</p>
				</div>
				<div className="Business-reviews">
				  <h3>{this.category}</h3>
				  <h3 className="rating">{this.stars} stars</h3>
				  <p>{this.reviews} reviews</p>
				</div>
			  </div>
			</div>
		);
	}
}

export default Business