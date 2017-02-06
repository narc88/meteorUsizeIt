import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Sessions } from '../../api/sessions.js';
 
 
class NewSession extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      session: {},
      currentUser: Meteor.user(),
    };
  }

  createSession(){
    console.log('iVEBEEENCALLED')
    Meteor.call('session.create');
  }

	render() { 
  	return (
          <div className="jumbotron">
            <p>New Session will be visible just for your contacts</p>
            <p>
              <a className="btn btn-success btn-lg" href="#" role="button" onClick={this.createSession}>
                Proceed
              </a>
            </p>
          </div>
  		);
  }
};

//Validators for component properties.
NewSession.propTypes = {
  sessions: PropTypes.array,
  currentUser: PropTypes.object,
};
 
export default createContainer(() => {
  Meteor.subscribe('sessions');
  
  return {
    sessions: Sessions.find({}, { sort: { createdAt: -1 } }).fetch()
  };
}, NewSession);


