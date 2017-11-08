import React, {Component} from 'react';

import AppHeader from '../components/header'
import AppContent from '../components/content'
import AppFooter from '../components/footer'

class Home extends Component {

	constructor(props) {
	    super(props);
	 
	}

	render() {

		return (
			<div className="container">
				<header><AppHeader data={this.props.data} /></header>
				<section><h1>This is home</h1></section>
				<footer><AppFooter /></footer>
			</div>
		);
		
	}
}

export default Home;