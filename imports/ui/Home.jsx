import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
// Home component - represents the whole app
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      	<div className="jumbotron">
	        <p>Welcum</p>
	        <p>
	          <a className="btn btn-success btn-lg" href="#" role="button" onClick={this.createSession}>
	            Proceed
	          </a>
	        </p>
	    </div>
    );
  }
}

export default createContainer(() => {

  return {};
}, Home);