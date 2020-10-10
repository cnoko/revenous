import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match'
		};
		this.sortByOptions = {
			best_match: 'Best Match',
			rating: 'Highest Rated',
			review_count: 'Most Reviewed',
		};
		this.handleSearch = this.handleSearch.bind(this);
	}
	getSortByClass(sortByOption) {
		if (sortByOption === this.state.sortBy) {
			return 'active';
		}
		return '';
	}
	
	handleSortByChange(value) {
		this.setState({
			sortBy: value
		});
	}
	
	handleSearch(event) {
		this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
		if (event) event.preventDefault();
	}
	
	handleTermChange(event) {
		this.setState({
			term: event.target.value
		});
	}
	
	handleLocationChange(event) {
		this.setState({
			location: event.target.value
		});
	}
	
	renderSortByOptions() {
		return Object.keys( this.sortByOptions).map(sortByOption => {
			let sortByOptionValue = this.sortByOptions[sortByOption];
			return <li className={this.getSortByClass(sortByOption)} key={sortByOption} onClick={this.handleSortByChange.bind(this,sortByOption)}>{sortByOptionValue}</li>;
		});
	}
	render() {
		return (
			<div className="SearchBar">
			  <div className="SearchBar-sort-options">
				<ul>
				{this.renderSortByOptions()}
				</ul>
			  </div>
			  <div className="SearchBar-fields">
				<input placeholder="Search Businesses" onChange={this.handleTermChange.bind(this)} />
				<input placeholder="Where?" onChange={this.handleLocationChange.bind(this)} />
			  </div>
			  <div className="SearchBar-submit">
				<a href="#" onClick={this.handleSearch}>Let's Go</a>
			  </div>
			</div>
		);
	}
}

export default SearchBar;