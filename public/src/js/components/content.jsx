import React, {Component} from 'react';

class AppContent extends Component {

	constructor(props) {
    	super(props);
        this.state = { 
            title: false,
            slug: false
        }
    }

    componentDidMount() {  
    	var content = this.getContent( this.props.id, this.props.data );
    	this.setState( { title : content, slug : this.props.id } );
  
    }

    componentWillReceiveProps( nextProps ) {
    	var content = this.getContent( nextProps.id, this.props.data );
    	this.setState( { title : content, slug : nextProps.id } );

    }

	// get the content by key from json info
	getContent( id, data ) {

		const instance = this;
		var content = false;

		if( data ) {
			Object.keys(data).map(function(key) {

				if( data[key]['key'] == id && !content ) {
					content = data[key]['content'];

				}

				if ( data[key]['child'] && !content) {
					content = instance.getContent( id, data[key]['child'] );
				
				}
			

			});
		}
		
		return content;

	}

	// display content
	render() {
		
		return <div><h1>{this.state.title}</h1></div>;

	}

} 

export default AppContent;