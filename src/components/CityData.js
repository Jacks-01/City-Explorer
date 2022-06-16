/**
 * @file Weather.js
 * @author Jack Stubblefield
 * @description contains all of the location data in order to query weather, movies, and location
 */
import React, { Component } from 'react';
import axios from 'axios';
import CityForm from './CityForm';
import CityMap from './CityMap';
import Movies from './Movies';
import Weather from './Weather';
import { Container, Row, Stack } from 'react-bootstrap';
const locationKey = process.env.REACT_APP_AUTHTOKEN;
const server = process.env.REACT_APP_SERVER;

class CityData extends Component {
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

			show: false,
			city: null,
			map: '',
			weatherData: [],
			movieData: [],
		};
	}

	componentDidMount = () => {
		document.body.style.backgroundColor = '#c7c9ff'
	}
	callBackendAPI = async () => {
		await axios({
			method: 'get',
			url: `${server}/weather`,
			params: {
				city: this.state.searchQuery,
				lat: this.state.location.lat,
				lon: this.state.location.lon,
			},
		}).then((response) => {
			this.setState({ weatherData: response.data });
			this.setState({ city: this.state.location.display_name });
		});

		await axios({
			method: 'get',
			url: `${server}/movies`,
			params: {
				year: 2022,
			},
		})
			.then((response) => {
				this.setState({ movieData: response.data });
			})
			.catch((err) => {
				console.error(err);
			});
	};

	getLocation = async (cityName) => {
		try {
			this.setState({ searchQuery: cityName });
			const API = `https://us1.locationiq.com/v1/search.php?key=${locationKey}&q=${cityName}&format=json`;
			const res = await axios.get(API);
			this.setState({ location: res.data[0] }, this.getMap);
			this.callBackendAPI();
		} catch (error) {
			console.error(error);
			this.setState({ show: true });
		}
	};

	getMap = async () => {
		const API = `https://maps.locationiq.com/v3/staticmap?key=${locationKey}&center=${this.state.location.lat},${this.state.location.lon}&zoom=18&size=500x500&format=png`;
		this.setState({ map: API });
	};

	render() {
		console.log(this.state.weatherData);
		return (
			<>
				<CityForm getLocation={this.getLocation} />
				
				<h2 style={{display: 'flex', justifyContent: 'center', padding: '1rem'}}> {this.state.location.display_name} </h2>
				<CityMap
					location={this.state.location}
					map={this.state.map}
					show={this.state.show}
					error={this.state.error}
				/>
				{this.state.city && (
					<section >
						<h2 style={{display: 'flex', justifyContent: 'center', padding: '1rem'}}>Your 3-day forecast for {this.state.city} is: </h2>
						<Container style={{display: 'flex', justifyContent: 'center'}}>
							<Row>
								<Stack direction="horizontal" gap={3}>
									<Weather weatherData={this.state.weatherData} />
								</Stack>
							</Row>
						</Container>
					</section>
				)}
				{this.state.city && (
					<section>
						<h3 style={{display: 'flex', justifyContent: 'center', padding: '1rem'}}>Movies in your area:</h3>
						<Movies movieData={this.state.movieData} />
					</section>
				)}
			</>
		);
	}
}

export default CityData;
