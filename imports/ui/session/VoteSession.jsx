import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
 
import Task from '../Task.jsx';
 
class VoteSession extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hideCompleted: false,
      tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
      incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
      currentUser: Meteor.user(),
    };
  }
  votingStarted(status){
    this.props.changeStatus('status');
  }
  votingFinished(status){
    this.props.changeStatus('status');
  }
  startVoting(){
    fetch('/games/' + this.props.gameId + '/players/' + this.props.username + '/votingStart', {
      method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      body: JSON.stringify({
            selectedScale: this.props.scale,
            username: this.props.username
        })
      }).then((response) => response.text())
      .then((responseText) => {
        let response = JSON.parse(responseText);
        this.props.updateAppStatus(response);
      }).catch((error) => {
          console.warn(error);
    });
  }
	render() {
    var startEstimation;
    if(this.props.isOrganizer && this.props.status === 'notStarted'){
      startEstimation = <button onClick={this.startVoting} id="startVote" className="btn btn-success"> Start estimation </button>;
    } 
    if(this.props.isOrganizer && this.props.status === 'started'){
      startEstimation = <button onClick={this.startEstimation} id="startVote" className="btn btn-success"> Estimate? </button>;
    } 
    if(this.props.isOrganizer && this.props.status === 'finished'){
      startEstimation = <button onClick={this.startEstimation} id="startVote" className="btn btn-success"> Estimate? </button>;
    } 
  	return (
      		<div>
        		{this.props.votes.map(function(object, i){
              return <Vote vote={object} />;
            })}
            {startEstimation}
      		</div>
  		);
  }
};

//Validators for component properties.
VoteSession.propTypes = {
  sessions: PropTypes.object,
  currentUser: PropTypes.object,
};
 
export default createContainer(() => {
  Meteor.subscribe('sessions');
  
  return {
    sessions: Sessions.find({}, { sort: { createdAt: -1 } }).fetch()
  };
}, VoteSession);


