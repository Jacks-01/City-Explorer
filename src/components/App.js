/**
 * @file App.js
 * @author Jack Stubblefield
 * @description City Explorer: retrieves data from the locationIQ API and displays the location entered on the web page.
 */
import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Button, Image } from 'react-bootstrap';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {
        place_id: 'unknown',
        display_name: 'none',
        lat: '',
        lon: '',
        },
        map: '',
    }
  }

  getLocation = async () => {
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_AUTHTOKEN}&q=${this.state.searchQuery}&format=json`;
    const res = await axios.get(API);
    this.setState({location: res.data[0]});
    console.log(res.data[0]);
    this.getMap();
  };
  getMap = async () => {
    const API = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_AUTHTOKEN}&center=${this.state.location.lat},${this.state.location.lon}&zoom=18&size=500x500&format=png`;
    console.log(`logging lon${this.state.location.lon}`)
    this.setState({map: API})
    // console.log({res})
  }
  render() { 
    console.log(`Location Queried: ${JSON.stringify(this.state.location)}`);
    return ( 
      <>
        <Form>
          <Form.Group>
            <Form.Label>Enter a location!</Form.Label>
            <Form.Control onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder='Enter location'/>
          </Form.Group>
        </Form>
        <Button  onClick={this.getLocation} variant='primary' type='submit'>Explore!</Button>
        {this.state.location.place_id && (
          <div>
            <h2>The city is: {this.state.location.display_name}</h2>
            <h2>Latitude: {this.state.location.lat}</h2>
            <h2>Longitude: {this.state.location.lon}</h2>
            <Image src={this.state.map}/>
          </div>
        )};
      </>
     );
  }
}
 
export default App;