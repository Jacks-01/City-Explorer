/**
 * @file App.js
 * @author Jack Stubblefield
 * @description City Explorer: retrieves data from the locationIQ API and displays the location entered on the web page.
 */
import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Alert, Button, Image } from 'react-bootstrap';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchQuery: '',
			location: {
				place_id: 'unknown',
				display_name: 'none',
				lat: '',
				lon: '',
			},
			map: '',
			show: false,
			weather: {
				city: null,
				data: null,
			},
		};
	}

	getLocation = async () => {
		try {
			const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_AUTHTOKEN}&q=${this.state.searchQuery}&format=json`;
			const res = await axios.get(API);
			this.setState({ location: res.data[0] });
			this.getMap();
		} catch (error) {
			console.error(error);
			this.setState({ show: true });
		}
	};
	getMap = async () => {
		const API = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_AUTHTOKEN}&center=${this.state.location.lat},${this.state.location.lon}&zoom=18&size=500x500&format=png`;
		this.setState({ map: API });
	};

	callBackendAPI = async (city) => {
		const response = await fetch('/weather?city=' + city);
		const body = await response.json();
		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
	};
	componentDidMount() {
		if (this.state.city !== null) {
			this.callBackendAPI(this.state.city)
				.then((res) => {
					this.setState({ data: res.express });
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}
	handleSearch = async (city) => {
		console.log(`App.handlesearch() city: ${city}`);
		this.setState({ city: city });
		this.callBackendAPI({ city })
			.then((res) => {
				this.setState({ data: res.express });
			})
			.catch((err) => {
				console.log(err);
			});
		console.log(`App.handleSearch() data: ${this.state.data}`);
	};
	render() {
		console.log(`Location Queried: ${JSON.stringify(this.state.location)}`);
		return (
			<>
				<Form>
					<Form.Group>
						<Form.Label>Enter a location!</Form.Label>
						<Form.Control
							onChange={(e) => this.setState({ searchQuery: e.target.value })}
							placeholder="Enter location"
						/>
					</Form.Group>
				</Form>
				<Button onClick={this.getLocation} variant="primary" type="submit">
					Explore!
				</Button>
				{this.state.location.place_id && (
					<div>
						<h2>The city is: {this.state.location.display_name}</h2>
						<h2>Latitude: {this.state.location.lat}</h2>
						<h2>Longitude: {this.state.location.lon}</h2>
						<Image src={this.state.map} />
						<Alert
							show={this.state.show}
							key={this.state.error}
							variant="danger"
						>
							Are you trying to break my code? Refresh and try again punk.
						</Alert>
					</div>
				)}
			</>
		);
	}
}

export default App;
