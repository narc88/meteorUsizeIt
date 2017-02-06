import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, browserHistory } from 'react-router';

// route components
import USizeItApp from './USizeItApp.jsx';
import Home from './Home.jsx';
import NewSession from './session/NewSession.jsx';
import VoteSession from './session/VoteSession.jsx';
import NoMatch from './NoMatch.jsx';

export const renderRoutes = () => (
  	<Router history={browserHistory}>
    	<Route path="/" component={USizeItApp}>
    		<Route path="home" component={Home}/>
      		<Route path="newsession" component={NewSession}/>
      		<Route path="other" component={NoMatch}/>
   	 	</Route>
   	 	<Route path="*" component={NoMatch}/>
  	</Router>
);