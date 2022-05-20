import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';

class WeatherForm extends Component {
    handleClick = () => {
		let value = document.getElementById('myForm').value
		this.props.getLocation(value);
	};
    
	render() {
		return (
			<div>
				<Form>
					<Form.Group>
						<Form.Label>Enter a location!</Form.Label>
						<Form.Control id="myForm" placeholder="Enter location" />
					</Form.Group>
				</Form>
				<Button onClick={this.handleClick} variant="primary" type="submit">
					Get Weather!
				</Button>
			</div>
		);
	}
}

export default WeatherForm;
