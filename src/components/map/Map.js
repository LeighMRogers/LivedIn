import React, { Component } from 'react';
import { Map, TileLayer, Marker, Tooltip } from 'react-leaflet';
// import Token from '../../Token';
// import MarkerClusterGroup from 'react-leaflet-markercluster';

export default class Mapper extends Component {
	state = {
		lat: 36.1627,
		lng: -86.7816,
		zoom: 13
	};
	render() {
		const Atoken = `https://api.mapbox.com/styles/v1/leighmrogers/ck60ygd6a06px1ithkcase8tr/wmts?access_token=pk.eyJ1IjoibGVpZ2htcm9nZXJzIiwiYSI6ImNrNjB5ZGJnaTAwOXozZHBwYXhweHM1ZTIifQ.zC19ZazyEY4xiAb-ANz-Xg`;
		const position = [this.state.lat, this.state.lng];
		return (
			<Map
				style={{ height: "100vh" }}
				center={position}
				zoom={this.state.zoom}
				maxZoom={18}
				className='map'
			>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url={"https://api.mapbox.com/styles/v1/leighmrogers/ck60ygd6a06px1ithkcase8tr/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibGVpZ2htcm9nZXJzIiwiYSI6ImNrNjB5ZGJnaTAwOXozZHBwYXhweHM1ZTIifQ.zC19ZazyEY4xiAb-ANz-Xg"}
				/>
				{/* <MarkerClusterGroup> */}
					{this.props.props.map(location => (
						<Marker
							key={location.id}
							position={[location.lat, location.lng]}
							anchor='bottom'
							// onMouseEnter={this.onMarkerClick.bind(this, location)}
							// onMouseLeave={this.onMarkerLeave}
						>
							<Tooltip>{location.name}</Tooltip>
						</Marker>
					))}
				{/* </MarkerClusterGroup> */}
			</Map>
		);
	}
}
