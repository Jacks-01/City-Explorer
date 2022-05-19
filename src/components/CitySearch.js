import React, { Component } from 'react';
import axios from 'axios';
import CityForm from './CityForm';
import CityMap from './CityMap';

class CitySearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: '',
			location: {
				place_id: null,
				display_name: 'none',
				lat: '',
				lon: '',
			},
			map: '',
			show: false,
		};
	}
	/**
	 *
	 * @param {string} cityName - the city name from the search
	 */
	getLocation = async (cityName) => {
		try {
			this.setState({ searchQuery: cityName });
			const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_AUTHTOKEN}&q=${cityName}&format=json`;
			const res = await axios.get(API);
			this.setState({ location: res.data[0] }, this.getMap);
		} catch (error) {
			console.error(error);
			this.setState({ show: true });
		}
	};
	getMap = async () => {
		const API = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_AUTHTOKEN}&center=${this.state.location.lat},${this.state.location.lon}&zoom=18&size=500x500&format=png`;
		this.setState({ map: API });
	};

	render() {
		return (
			<>
				<CityForm getLocation={this.getLocation} />
				{this.state.location.place_id && (
					<CityMap
						location={this.state.location}
						map={this.state.map}
						show={this.state.show}
						error={this.state.error}
					/>
				)}
			</>
		);
	}
}

export default CitySearch;
