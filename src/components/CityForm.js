/**
 * @file Form.js
 * @author Jack Stubblefield
 * @description Generates the form for user input to allow them to search for a city.
 *
 */

import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';



class CityForm extends Component {
	handleClick = () => {
		let value = document.getElementById('myForm').value
		this.props.getLocation(value);
	};
	
	render() {
		return (
			<>
				<Form>
					<Form.Group>
						<Form.Label>Enter a location!</Form.Label>
						<Form.Control
							id='myForm'
							placeholder="Enter location"
						/>
					</Form.Group>
				</Form>
				<Button onClick={this.handleClick} variant="primary" type="submit">
					Explore!
				</Button>
			</>
		);
	}
}

export default CityForm;
