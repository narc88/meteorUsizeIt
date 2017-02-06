import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import { RouteTransition } from 'react-router-transition';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
 
// USizeItApp component - represents the whole app
class USizeItApp extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      currentUser: Meteor.user(),
    };
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">uSizeIt</a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a href="/home">Home</a></li>
                <li><Link to="/newsession">New Session</Link></li>
                <li><Link to="/home">Join</Link></li>
                <li><Link to="/newsession">Join</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <RouteTransition
          pathname={this.props.location.pathname}
          atEnter={{ translateX: 100 }}
          atLeave={{ translateX: -100 }}
          atActive={{ translateX: 0 }}
          mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
        >
          {this.props.children}
        </RouteTransition>
        
      </div>
    );
  }
}

USizeItApp.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  //Meteor.subscribe('tasks');
  
  return {};
}, USizeItApp);