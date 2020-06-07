/**
 * Remi P
 * June 6, 2020
 * Final project
 * Advanced React
 * UCI extension Spring 2020
 */
import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};
/**
 * display country information
 * @param {*} param0 
 */
export class ListFromRest extends Component {
  constructor(props) {
    super(props);
    this.state = {latitude: props.message.latitude, longitude:  props.message.longitude, place: props.message.name};
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps){
      this.setState({latitude: this.props.message.latitude, longitude:  this.props.message.longitude, place: this.props.message.name});
    }
  }


  render() {

    return (
      <Map
        google={this.props.google}
        zoom={5}
        style={mapStyles}
        initialCenter={{
         lat: this.state.latitude,
         lng: this.state.longitude
        }}
        center={{
          lat:this.state.latitude,
          lng: this.state.longitude
        }}
      >
      <Marker
        name={this.state.place}
        position={{lat: this.state.latitude, lng: this.state.longitude}} />
      <Marker /> 
      </Map>
    );
  }
}


// export default ListFromRest;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCGqCIEHEYroWEM5-siX_vKw6FOxMlueQE'
})(ListFromRest);