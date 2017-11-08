import React, {Component, PureComponent} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class MenuItem extends Component {

	constructor(props) {
	    super(props);
	 	
	 	this.state = {
	 		'classes' : ''
	 	}

	 	this.addHover = this.addHover.bind(this);
	 	this.removeHover = this.removeHover.bind(this);
	 	this.clicked = this.clicked.bind(this)

	}

	addHover() {
		
		this.setState({'classes' : 'hover'});

	}

	removeHover() {
		
		this.setState({'classes' : ''});

	}

	clicked() {
		this.removeHover();
		const el = document.getElementById("burger-menu");
		el.click();

	}

	render() {

		if ( this.props.child )
			var dropDown = <MenuItems data={this.props.child} />;

		return (<li className={'nav-item ' + this.state.classes}  
				   	onMouseEnter={this.addHover}
                   	onMouseLeave={this.removeHover}
                   	onClick={this.clicked}><Link to={'/' + this.props.link} className="nav-link">{this.props.label}</Link>{dropDown}</li>
				);
	}

}


class MenuItems extends Component {

	constructor(props) {
	    super(props);
	 
	}

	

	render() {

		const instance = this;
		const items = this.props.data;
		const menuItems = [];

		if(items) {
			Object.keys(items).map(function(key) {
				
				var link = items[key]['key'];
				var label = items[key]['label'];
				var child = items[key]['child'];
				
				menuItems.push(<MenuItem link={link} label={label} child={child} />);

			});
		}

		return (
			<ul className="main-nav">
				{menuItems}
			</ul>
		)

	}

}

class Menu extends Component {

	constructor(props) {
	    super(props);

	    this.state = {
	    	classes : ''
	    }

	    this.toggleMenu = this.toggleMenu.bind(this);
	 
	}

	toggleMenu() {

		if( this.state.classes == '' ) {
			this.setState({
				classes : 'open'
			});
			
		} else {
			this.setState({
				classes : ''
			});
			
		}

	}

	render() {

		return(
			<div>
				<nav className={this.state.classes}>
					<MenuItems data={this.props.data} />
				</nav>
				<div id="burger-menu" className="burger-menu"
					 onClick={this.toggleMenu}><div className="stripes"></div></div>
			</div>

		)


	}

}

export default Menu;