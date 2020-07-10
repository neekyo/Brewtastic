import { Map, Marker } from 'google-maps-react';

const mapStyles = {
	width: '20%',
	height: '20%'
};

export class MapContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			stores: [
				{ lat: 47.49855629475769, lng: -122.14184416996333 },
				{ latitude: 47.359423, longitude: -122.021071 },
				{ latitude: 47.2052192687988, longitude: -121.988426208496 },
				{ latitude: 47.6307081, longitude: -122.1434325 },
				{ latitude: 47.3084488, longitude: -122.2140121 },
				{ latitude: 47.5524695, longitude: -122.0425407 }
			]
		};
	}

	displayMarkers = () => {
		return this.state.stores.map((store, index) => {
			return (
				<Marker
					key={index}
					id={index}
					position={{
						lat: store.latitude,
						lng: store.longitude
					}}
					onClick={() => console.log('Clicked!')}
				/>
			);
		});
	};

	render() {
		return (
			<Map google={this.props.google} zoom={8} style={mapStyles} initialCenter={{ lat: 47.444, lng: -122.176 }}>
				<Marker position={{ lat: 48.0, lng: -122.0 }} />
			</Map>
		);
	}
}
