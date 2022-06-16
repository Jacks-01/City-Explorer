/**
 * @file Weather.js
 * @description displays weather data in a nice bootstrap component
 */
import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
// C:\Users\DeltaVStudent\projects\Code301\city-explorer\city-explorer-front\src\icons\._c03d.png
const Weather = (props) => {
	return props.weatherData.map((day, index) => (
		<div key={index}>
			<Image src={`/icons/${day.icon}.png`}/>
			<p>{day.date}</p>
			<p>{day.description}</p>
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
