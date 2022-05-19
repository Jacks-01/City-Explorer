import React, { Component } from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';


class CitySelector extends Component {
    handleSearch = (e) => {

    };
    render() { 
        return ( 
        <div>
            <h1>Get your weather forecast!</h1>
            <Dropdown>
                <DropdownButton title="Choose a city" onSelect={this.props.handleSearch}>
                    <Dropdown.Item eventKey="Seattle">Seattle</Dropdown.Item>
                    <Dropdown.Item eventKey="Paris">Paris</Dropdown.Item>
                    <Dropdown.Item eventKey="Amman">Amman</Dropdown.Item>
                </DropdownButton>
            </Dropdown>;
        </div>
    )}
};
 
export default CitySelector;