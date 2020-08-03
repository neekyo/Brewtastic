import React, { Component } from 'react';
import api from '../../api';
import SimpleMap from '../SimpleMap';
import Spinner from '../Spinner';

export default class Breweries extends Component {
	constructor(props) {
		super(props);
		this.state = {
			breweries: [],
			filteredBreweries: [],
			loading: true
		};
	}

	componentDidMount() {
		api
			.getBreweries()
			.then((breweries) => {
				console.log('Success!', breweries);
				this.setState({
					breweries,
					filteredBreweries: breweries,
					loading: false
				});
			})
			.catch((err) => {
				console.error(err);
				this.setState({ loading: false });
			});
	}

	searchBreweries = (e) => {
		let search = e.target.value;
		let filteredBreweries = this.state.breweries.filter((entry) => {
			return entry.name.toLowerCase().includes(search.toLowerCase());
		});
		console.log(filteredBreweries);
		this.setState(
			{
				filteredBreweries: filteredBreweries
			},
			() => {
				console.log(this.state.filteredBreweries);
			}
		);
	};

	render() {
		return (
			<React.Fragment>
				<div className="background">
					<div className="breweries">
						<h2>Breweries (25,000+!)</h2>
						<form className="brewSearch">
							<input
								onChange={this.searchBreweries}
								placeholder=" Search all breweries"
								id="search"
								type="text"
								className="search"
							/>
						</form>
					</div>
					<div className="map">
						<SimpleMap filteredBreweries={this.state.filteredBreweries} />
					</div>
					<div className="brewCard">
						{this.state.loading && <Spinner />}
						{this.state.filteredBreweries.map((eachBrewery, i) => (
							<div key={i} className="eachBrewery">
								<img src={eachBrewery.image_url} alt="" />
								<ul className="brewDeets">
									<p key={i + 'a'}>Name: {eachBrewery.name}</p>
									<p key={i + 'b'}>City: {eachBrewery.city}</p>
									<p key={i + 'd'}>State: {eachBrewery.province}</p>
									<p key={i + 'e'}>Address: {eachBrewery.address}</p>
								</ul>
							</div>
						))}
					</div>
				</div>
			</React.Fragment>
		);
	}
}
