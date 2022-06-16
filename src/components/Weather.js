/**
 * @file Weather.js
 * @description displays weather data in a nice bootstrap component
 */

import { Card } from 'react-bootstrap';


const Weather = (props) => {
	return props.weatherData.map((day, index) => (
	
		<Card key={index} style={{ width: '12rem', backgroundColor: '#a8baf7' }}>
			<Card.Img
				variant="top"
				src={`/icons/${day.icon}.png`}
				style={{ width: '100px' }}
			/>
			<Card.Body>
				<Card.Title>{day.date}</Card.Title>
				<Card.Text>{day.description}</Card.Text>
			</Card.Body>
		</Card>
	));
};

export default Weather;
