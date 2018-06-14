import React, { Component } from 'react';
import './App.css';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

class App extends Component {

	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ""
		}
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(user => this.setState({ robots: user }))
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

 	render() {
 		const { robots, searchfield } = this.state;
 		const filteredRobots = robots.filter(robot => {
 			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
 		});

    	return (
      	<div className="tc">
      		<h1 className="f1">Robofriends</h1>
      		<SearchBox onSearchChange={this.onSearchChange}/>
      		<Scroll>
        		<CardList robots={filteredRobots}/>
        	</Scroll>
      	</div>
    	);
  	}
}

export default App;
