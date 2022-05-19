import React, { Component } from 'react';
import {Image, Alert} from 'react-bootstrap';

class CityMap extends Component {

	render() {
		return (
			<div>
				{this.props.location.place_id && (
					<div>
						<h2>The city is: {this.props.location.display_name}</h2>
						<h2>Latitude: {this.props.location.lat}</h2>
						<h2>Longitude: {this.props.location.lon}</h2>
						<Image src={this.props.map} />
						<Alert
							show={this.props.show}
							key={this.props.error}
							variant="danger"
						>
							Are you trying to break my code? Refresh and try again punk.
						</Alert>
					</div>
				)}
			</div>
		);
	}
}

export default CityMap;
