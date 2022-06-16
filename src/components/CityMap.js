import React, { Component } from 'react';
import { Image, Alert, Container, Row, Col } from 'react-bootstrap';

class CityMap extends Component {
	render() {
		return (
			<Container style={{ display: 'flex', justifyContent: 'center' }}>
				
				<Row>
					<Image src={this.props.map} />
				</Row>

				<Alert show={this.props.show} key={this.props.error} variant="danger">
					Are you trying to break my code? Refresh and try again punk.
				</Alert>
			</Container>
		);
	}
}

export default CityMap;
