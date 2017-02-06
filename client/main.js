import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';
import USizeItApp from '../imports/ui/USizeItApp.jsx';
import NewSession from '../imports/ui/session/NewSession.jsx';

import { renderRoutes } from '../imports/ui/Routes.jsx';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('render-target'));
});