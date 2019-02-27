import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
  width: '61.8%',
  height: '100%'
}

export class GoogleMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        initialCenter={{
          lat: 31.5493,
          lng: -97.1467
        }}
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