import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
function GoogleMap(props) {

  const mapStyles = {
    width: '400px',
    height: '200px',
  };
  const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '100%'
  }
  return (
    <Map
    google={props.google}
    zoom={1}
    style={mapStyles}
    containerStyle={containerStyle}
    initialCenter={{ lat: 47.444, lng: -122.176}}
  >
    <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 47.444, lng: -122.176}} />
  </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDGArUEBa5ns09IA7nt7jP-xfNIUkToFts'
})(GoogleMap);