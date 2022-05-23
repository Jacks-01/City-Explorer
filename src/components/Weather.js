/**
 * @file Weather.js
 * @author Jack Stubblefield
 * @desc
 */
import React, { Component } from 'react';
import axios from 'axios';
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
			movieData: [],
		};
	}

	callBackendAPI = async () => {
		await axios({
			method: 'get',
			url: 'http://localhost:5000/weather',
			params: {
				city: this.state.searchQuery,
				lat: this.state.location.lat,
				lon: this.state.location.lon,
			},
		}).then((response) => {
			console.log(response.data);
			this.setState({ weatherData: response.data });
			console.log(this.weatherData);
			this.setState({ city: this.state.location.display_name });
		});
		
		await axios({
			method: 'get',
			url: 'http://localhost:5000/movies',
			params: {
				year: 2022
			},
		})
		.then((response) => {
			console.log(response);
			this.setState({movieData: response.data});
			console.log('current state of movieData:', this.state.movieData);
		}).catch((err) => {
			console.error(err);
		});
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
		console.log(this.state.weatherData);
		return (
			<>
				<WeatherForm getLocation={this.getLocation} />
				{this.state.city && (
					<>
						<h2>Your 3-day forecast for {this.state.city} is: </h2>
						{this.state.weatherData.map((day, index) => (
							<div key={index}>
								<p>day: {day.datetime}</p>
								<p>description: {day.description}</p>
							</div>
						))}
					</>
				)}
				{this.state.weatherData && 
				(this.state.movieData.map((movie, index) => {
					<div key={index}>
						<p> Title: {movie.title}</p>
						<p>overview: {movie.overview}</p>
					</div>
				})

				)}
			</>
		);
	}
}

export default Weather;
