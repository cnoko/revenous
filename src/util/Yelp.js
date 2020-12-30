const apiKey = process.env.REACT_APP_YELP_API_KEY;
const defaultBusiness = {
  id: '',
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  location: {
	address: '1010 Paddington Way',
	city: 'Flavortown',
	state: 'NY',
	zip_code: '10101',
  },
  category: 'Italian',
  rating: 4.5,
  review_count: 90
};
function changeIds(array) {
	const idPrefix = Math.random() * 10000000;
	return array.filter((el, index) => {
		el.id = idPrefix + '_' + index;
		return el;
	});
}

const Yelp = {
	defaultBusinesses: changeIds([defaultBusiness, defaultBusiness, defaultBusiness, defaultBusiness, defaultBusiness, defaultBusiness]),
	search: function(term, location, sortBy) {
	return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
			headers: {
				Authorization: `Bearer ${apiKey}`,
			}
		}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if(jsonResponse.businesses) {
				return jsonResponse.businesses.map(business => {
					return {
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						alias: business.alias,
						is_claimed: business.is_claimed,
						is_closed: business.is_closed,
						phone: business.phone,
						review_count: business.review_count,
						rating: business.rating,
						url: business.url,
						display_phone: business.display_phone,
						categories: business.categories[0].title,
						location: {
							address: business.location.address1,
							city: business.location.city,
							state: business.location.state,
							zip_code: business.location.zip_code,
							country: business.location.country,
							display_address: business.location.display_address,
							
						},
						photos: business.photos,
						hours: business.hours,
					};
				});
			}
			return;
		});
	}
};
export default Yelp;
