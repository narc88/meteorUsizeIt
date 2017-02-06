
import React from 'react';

var Notification = React.createClass({
	render() {
	    	var type = '';
	    	var errors = '';
	    	if(this.props.error.length > 0){
	    		erors = <div>
	    					{this.props.error.map(function(object, i){
					    		type = 'alert alert-'+object.type;
								return <div className={type}>{object.msg}</div>;
							})}
							</div>;
	    	}else{
	    		type = 'alert alert-'+this.props.error.type;
	    		errors = <div className={type}>{this.props.error.msg}</div>;
	    	}
	    	return errors;
	  }
});


module.exports = Notification;
 