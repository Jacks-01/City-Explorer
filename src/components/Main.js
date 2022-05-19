import React, { Component } from 'react';
import CitySearch from './CitySearch';
import Weather from './Weather';



class Main extends Component {
    constructor(props) {
		super(props);
		this.state = {
			
		};
        
           
	} 
    render() { 
        return (
            <div>
            <h1>Hi this is bob</h1>
            <CitySearch/>
            <Weather/>
            </div>
          );
    } 
    /**
     * <CitySelector/>
            <Weather/>
     */
}
 
export default Main;