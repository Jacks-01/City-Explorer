/**
 * @file Weather.js
 * @description displays weather data in a nice bootstrap component
 */

const Weather = (props) => {
	return props.weatherData.map((day, index) => (
		<div key={index}>
			<p>day: {day.datetime}</p>
			<p>description: {day.description}</p>
		</div>
	));
};

export default Weather;
