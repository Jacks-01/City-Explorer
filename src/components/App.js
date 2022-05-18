/**
 * @file App.js
 * @author Jack Stubblefield
 * @description City Explorer: retrieves data from the locationIQ API and displays the location entered on the web page.
 */
import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import {
	Alert,
	Button,
	Dropdown,
	Image,
	DropdownButton,
} from 'react-bootstrap';

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
			city: null,
			data: null,
		};
	}

	getLocation = async () => {
		try {
			const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_AUTHTOKEN}&q=${this.state.searchQuery}&format=json`;
			const res = await axios.get(API);
			this.setState({ location: res.data[0] });
			this.getMap();
			// console.log(`Location Queried: ${JSON.stringify(this.state.location)}`);
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
		console.log(typeof city);
		const weatherQuery = 'http://localhost:5000/weather?city=' + city;
		console.log(`this our search query ${weatherQuery}`);
		const response = await axios.get(weatherQuery)

		if (response.status !== 200) {
			throw Error(response.message);
		}
		return response;
	};

	componentDidMount() {
		if (this.state.city !== null) {
			this.callBackendAPI(this.state.city)
				.then((response) => {
					this.setState({ data: response.data });
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}
	handleSearch = async (e) => {
		console.log(`App.handlesearch() city: ${e}`);
		this.setState({ city: e });
		this.callBackendAPI( e )
			.then((response) => {
				this.setState({ data: response.data.express });
				console.log(`App.handleSearch() data: ${this.state.data}`);
				console.log(response.data.express);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	// cityClick = async (e) => {
	// 	this.setState({ city: e });
	// 	console.log(e);
	// 	this.handleSearch(e);
	// };

	render() {
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
				<div>
					<h1>Get your weather forecast!</h1>
					<Dropdown>
						<DropdownButton title="Choose a city" onSelect={this.handleSearch}>
							<Dropdown.Item eventKey="Seattle">Seattle</Dropdown.Item>
							<Dropdown.Item eventKey="Paris">Paris</Dropdown.Item>
							<Dropdown.Item eventKey="Amman">Amman</Dropdown.Item>
						</DropdownButton>
					</Dropdown>
					{this.state.city && (
						<>
							<p>{this.state.data}</p>
						</>
					)}
				</div>
			</>
		);
	}
}

export default App;
