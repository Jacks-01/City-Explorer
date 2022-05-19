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
            city: null,
            weatherData: [],
        };
    }

    callBackendAPI = async (e) => {
        const weatherQuery = 'http://localhost:5000/weather?city=' + e;
        console.log('this is the weather query', weatherQuery);
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
		console.log(this.state.weatherData);
		return (
			<>
                <CitySelector
                handleSearch={this.handleSearch}/>
                
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
		)
	}
}

export default Weather;
