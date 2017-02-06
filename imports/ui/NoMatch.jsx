import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
// NoMatch component - represents the whole app
class NoMatch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span>Not Found</span>
    );
  }
}

export default createContainer(() => {

  return {};
}, NoMatch);