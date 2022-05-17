/**
 * @file Weather.js
 * @author Jack Stubblefield
 * @desc
 */
import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class Weather extends Component {
    
    render() { 
        console.log(this.props.weather)
        return (  
            <>
                <div>
						<h1>Get your weather forecast!</h1>
						<Dropdown>
							<DropdownButton title='Choose a city' onSelect={this.cityClick}>
								<Dropdown.Item eventKey='Seattle'>Seattle</Dropdown.Item>
								<Dropdown.Item eventKey='Paris'>Paris</Dropdown.Item>
								<Dropdown.Item eventKey='Amman'>Amman</Dropdown.Item>
							</DropdownButton>
						</Dropdown>
						{this.props.city && (
							<>
								<p>{this.props.data}</p>
							</>
						)}
					</div>
            
            </>
        );
    }
}
 
export default Weather;