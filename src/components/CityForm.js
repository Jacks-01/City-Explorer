/**
 * @file Form.js
 * @author Jack Stubblefield
 * @description Generates the form for user input to allow them to search for a city.
 *
 */

import React, { Component } from 'react';
import {Form, Alert, Button, Image} from 'raect-bootstrap';


class CityForm extends Component {
	render() {
		return (
			<>
				<Form>
					<Form.Group>
						<Form.Label>Enter a location!</Form.Label>
						<Form.Control
							onChange={(e) => this.setState({ searchQuery: e.target.value })}
							placeholder="Enter location"
						/>
					</Form.Group>
				</Form>
				<Button onClick={this.props.getLocation} variant="primary" type="submit">
					Explore!
				</Button>
			</>
		);
	}
}

export default CityForm;
