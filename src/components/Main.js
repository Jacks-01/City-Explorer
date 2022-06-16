/**
 * @file Main.js
 * @description Responsible for holding all of the primary components and passing them to App.js
 */
import React, { Component } from 'react';
import CityData from './CityData';
import Header from './Header';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<div>
				<Header/>
				<CityData/>
			</div>
		);
	}
}

export default Main;
