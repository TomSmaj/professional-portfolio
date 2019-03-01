import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
  width: '50%',
  height: '100%'
}

export class GoogleMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: this.props.mapCenter.lat,
        lng: this.props.mapCenter.lng
      }
    }
  } 

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        initialCenter={this.state.center}
        style={style}>
        <Marker
          title={'Telus International'}
          name={'Telus'}
          position={{ lat: 30.4581, lng: -97.7507 }} />
        <Marker
          title={'Apogee Telecom'}
          name={'Apogee'}
          position={{ lat: 30.3867, lng: -97.7098 }} />
        <Marker
          title={'Toyota Tsusho Network Integration'}
          name={'TTNI'}
          position={{ lat: 33.0871, lng: -96.8217 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GMAPS_KEY)
})(GoogleMap)