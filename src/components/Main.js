import React, { Component } from 'react';
import CityForm from './CityForm';
import CitySelector from './CitySelector';
import Weather from './Weather';



class Main extends Component {
    constructor(props) {
		super(props);
		this.state = {
			
		};
        
           
	} 
    render() { 
        return (
            <>
            <CityForm/>
            <CitySelector></CitySelector>
            <Weather/>
            </>
          );
    }
}
 
export default Main;