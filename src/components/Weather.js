/**
 * @file Weather.js
 * @description displays weather data in a nice bootstrap component
 */
import React, { Component } from 'react';
import { Card, Image } from 'react-bootstrap';
// C:\Users\DeltaVStudent\projects\Code301\city-explorer\city-explorer-front\src\icons\._c03d.png
const Weather = (props) => {
	return props.weatherData.map((day, index) => (
			<Card key={index} style={{width: '12rem'}}>
				<Card.Img variant='top' src={`/icons/${day.icon}.png`}/>
				<Card.Body>
					<Card.Title>{day.date}</Card.Title>
					<Card.Text>{day.description}</Card.Text>
				</Card.Body>
			</Card>
	));
};

export default Weather;
