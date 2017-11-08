import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import axios from 'axios';

import Home from './pages/home' 
import Page from './pages/page' 

class App extends Component {
	
	constructor(props) {
	    super(props);

	    this.state = {
	      data: false
	    };
	}

	componentWillMount() {
		
		this.getData( 'http://localhost:8080/menu.json' );		

	}

	getData( path ) {

		var instance = this;

		axios.get( path ).then(res => {
			instance.setState( { data : res.data } );

		});

	}	

	render() {

		return (
			<Router>
				<div>
					<Route exact path="/" component={(props) => (<Home data={this.state.data} id={props.match.params.id} />)} />
					<Route path="/:id" component={(props) => (<Page data={this.state.data} id={props.match.params.id} />)} />
				</div>
			</Router>
		);
	
	}

}

ReactDOM.render( <App />, document.getElementById("Wrap") );