/**
 * @file Weather.js
 * @author Jack Stubblefield
 * @desc
 */
import React, { Component } from 'react';
import axios from 'axios';
// import CitySelector from './CitySelector';
import WeatherForm from './WeatherForm';

class Weather extends Component {
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

			city: null,
			weatherData: [],
	}
};

	callBackendAPI = async () => {
		await axios({
			method: 'get',
			url: 'http://localhost:5000/weather',
			params: {
				city: this.state.searchQuery,
				lat: this.state.location.lat,
				lon: this.state.location.lon
			}
		});




	// 	// const sendQuery = `https://localhost:5000/weather?city=${e}&lat=${this.state.lat}&lon=${this.state.lon}`;
	// 	// console.log(`Query Parameters:  City: ${e}, lat: ${this.state.lat}, lon: ${this.state.lon}`);
	// 	// const response = await axios.get(sendQuery);
        
	// 	// const weatherQuery = 'http://localhost:5000/weather?city=' + e;
	// 	// console.log('this is the weather query', weatherQuery);
	// 	// const response = await axios.get(weatherQuery);

	// 	// return response;
	};
	
	getLocation = async (cityName) => {
		try {
			console.log('this is the city', cityName);
			this.setState({ searchQuery: cityName });
			const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_AUTHTOKEN}&q=${cityName}&format=json`;
			const res = await axios.get(API);
			// console.log('this is the locationIQ data',res.data);
			this.setState({ location: res.data[0] }, this.callBackendAPI);
			this.callBackendAPI();
			// console.log('this is the state of location:', this.state);
		} catch (error) {
			console.error(error);
			this.setState({ show: true });
		}
	};

	render() {
		// console.log(this.state.weatherData);
		return (
			<>
				<WeatherForm getLocation={this.getLocation}/>
				{/* <CitySelector handleSearch={this.handleSearch} /> */}
				{this.state.city && (
					<>
						<h2>Your 3-day forecast for {this.state.city} is: </h2>
						{this.state.weatherData.map((day, index) => (
							<div key={index}>
								<p>day: {day.date}</p>
								<p>description: {day.description}</p>
							</div>
						))}
					</>
				)}
			</>
		);
	}
}

export default Weather;
