import React, { Component } from 'react';
import CitySearch from './CitySearch';
import Weather from './Weather';

class Main extends Component {
	render() {
		return (
			<div>
				{/* <CitySearch /> */}
				<Weather />
			</div>
		);
	}
}

export default Main;
