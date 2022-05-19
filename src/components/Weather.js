/**
 * @file Weather.js
 * @author Jack Stubblefield
 * @desc
 */
import React, { Component } from 'react';
import axios from 'axios';
import CitySelector from './CitySelector';

class Weather extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            weatherData: [],
        };
    }

    callBackendAPI = async (e) => {
        const weatherQuery = 'http://localhost:5000/weather?city=' + e;
        const response = await axios.get(weatherQuery);
        return response;
    };

    handleSearch = async (e) => {
        console.log(`handlesearch() city: ${e}`);
        this.setState({ city: e });
        this.callBackendAPI(e)
            .then((response) => {
                this.setState({ weatherData: response.data });
            })
            .catch((err) => {
                console.log(err);
            });
    };
	render() {
		console.log(this.props.weatherData);
		return (
			<>
                <CitySelector/>
				{this.props.city && (
					<>
						<h2>Your 3-day forecast for {this.props.city} is: </h2>
						{this.props.weatherData.map((day, index) => (
							<div key={index}>
								<p>day: {day.date}</p>
								<p>description:{day.description}</p>
							</div>
						))}
					</>
				)}
			</>
		);
	}
}

export default Weather;
