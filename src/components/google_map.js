import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		// embed google maps inside docuemtn 
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}


	render() {
		// ref allows us to reference html element that has been rendered to map
		// this.refs.map
		return <div ref="map" />;
	}

}

export default GoogleMap;