import React, {Component} from 'react';
import Menu from './header/menu';

class AppHeader extends Component {

	constructor(props) {
	    super(props);
	 
	}
		
	render() {

		return (
			<div>
				<Menu data={this.props.data} />		
			</div>
		);

	}

} 

export default AppHeader;