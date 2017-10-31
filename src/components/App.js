import React, { Component } from 'react';
import { Container, Header, Divider,Icon} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import SearchBar from './SearchBar';
import ShowItems from './ShowItems';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isItemsLoading : true,
			foundBars : []
		}
		this.searchBars = this.searchBars.bind(this);
		this.getDetails = this.getDetails.bind(this);
	}
	options = {
		method: 'GET',
		headers: {
			'user-key': '869378de0668d2a2943f60b65779f9c5'
		}
	}

	searchBars(query) {
		console.log(query);
		console.log('Lets\'s fetch now');

		let url = `https://developers.zomato.com/api/v2.1/locations?query=${query}`
		fetch(url, this.options)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.getDetails(data);
			})
			.catch(() => {
				console.log("Something really bad has happened.")
			});
	}

	getDetails(data) {
		const cityID = data.location_suggestions[0].city_id;
		const locationType = data.location_suggestions[0].entity_type;
		let url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityID}&entity_type=city&count=100&category=11`;
		fetch(url, this.options)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState ({
					isItemsLoading : false,
					foundBars : data.restaurants
				})
				// console.log(data.restaurants);
			})
			.catch(()=>{
				console.log("Something really bad has happened.")
			});
	}
	render() {
		let ShowBars
		if(this.isItemsLoading === false) {
			ShowBars = <ShowItems />
			console.log(this.foundBars);
		} else {
			ShowBars = <ShowItems bars={this.state.foundBars} />
		}
		return (
			<div >
				<Container textAlign='center' >
					<Header as='h2' icon textAlign='center' style={{marginTop : '1.5rem'}}>
						<Icon name='cocktail' color='olive' circular bordered inverted/>
						<Header.Content>
							Openbar
						</Header.Content>
					</Header>
					<Divider />
					<SearchBar search={this.searchBars}/>
					{ShowBars}
				</Container>
			</div>
		)
	}
}

export default App;