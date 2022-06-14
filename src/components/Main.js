/**
 * @file Main.js
 * @description Responsible for holding all of the primary components and passing them to App.js
 */
import React, { Component } from 'react';
import CityData from './CityData';
import CitySearch from './CitySearch';
import CityMap from './CityMap';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<div>
				<CityData/>
			</div>
		);
	}
}

export default Main;
