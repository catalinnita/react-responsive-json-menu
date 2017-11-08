import React, {Component} from 'react'

import AppHeader from '../components/header'
import AppContent from '../components/content'
import AppFooter from '../components/footer'

class Page extends Component {

	constructor(props) {
	    super(props);
	 	
	 	this.state = {
	 		data : false
	 	}
	}

    componentWillReceiveProps( nextProps ) {
    	this.setState( { data : nextProps.data });

    }

	render() {

		return (
			<div className="container">
				<header><AppHeader data={this.props.data} /></header>
				<section><AppContent data={this.props.data} id={this.props.id} /></section>
				<footer><AppFooter /></footer>
			</div>
		);
	}
}

export default Page;