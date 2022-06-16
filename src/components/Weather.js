/**
 * @file Weather.js
 * @description displays weather data in a nice bootstrap component
 */
import React, { Component } from 'react';

const Weather = (props) => {
	return props.weatherData.map((day, index) => (
		<div key={index}>
			<p>day: {day.datetime}</p>
			<p>description: {day.description}</p>
		</div>
	));
};

class WeatherDay extends Component {
	render() { 
		return (
			<>
			</>
		);
	}
}
 
export default Weather;
