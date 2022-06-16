/**
 * @file Form.js
 * @author Jack Stubblefield
 * @description Generates the form for user input to allow them to search for a city.
 *
 */

import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class CityForm extends Component {
	handleClick = () => {
		let value = document.getElementById('myForm').value;
		this.props.getLocation(value);
	};

	render() {
		return (
			<>
				<Form style={{ display: 'flex', justifyContent: 'center' }}>
					<Form.Group>
						<Form.Label>Enter a location!</Form.Label>
						<Form.Control id="myForm" placeholder="Location" />
					</Form.Group>
				</Form>
				<Container style={{display: 'flex', justifyContent: 'center'}}>
					<Button onClick={this.handleClick} variant="primary" type="submit" style={{width: '14rem'}}>
						Explore!
					</Button>
				</Container>
			</>
		);
	}
}

export default CityForm;
