
import { render } from 'react-dom'; 

FlowRouter.route('/estimate', {
    name: 'estimate',
    action: function(params) {
        render(<USizeItApp />, document.getElementById('render-target'));
    }
});


FlowRouter.route('/newSession', {
    name: 'new-session',
    action: function(params) {
        render(<NewSession />, document.getElementById('render-target'));
    }
});