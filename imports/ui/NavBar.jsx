
NavBar = React.createClass({

	render() {
		//Statuses notStarted - voting - voted - startedSession - finishedSession
		let status;
		switch(this.props.status) {
		    case 'notStarted':
		        status = 'Not started.'
		        break;
		    case 'voting':
		        status = 'Voting...'
		        break;
		    case 'voted':
		        status = 'Finished voting.'
		        break;
		    case 'startedSession':
		        status = 'Started voting session.'
		        break;
		    case 'finishedSession':
		       	status = 'Finished voting session.'
		        break;
		    default:
		        status = 'Limbo'
		}
	  	return 	<div className="container-fluid">
	  				<div className="navbar-header">
	  					<p className="navbar-text navbar-right">Signed in as: <em><b>{this.props.username}</b></em></p>
	  				</div>
	  				<div id="navbar-main" className="navbar-collapse collapse">
	  					<div className="navbar-collapse collapse navbar-responsive-collapse">
	  						<ul className="nav navbar-nav navbar-right">
	  							<li>
	  								<p className="navbar-text"> Selected Scale: {this.props.scale}</p>
	  							</li>
	  							<li>
	  								<p className="navbar-text"> Status: {status}</p>
	  							</li>
	  							<li>
	  								<p className="navbar-text"> Game Id: {this.props.gameId}</p>
	  							</li>
	  							<li className="dropdown">
		  							<select id="scale-options" className="form-control">
		  								{this.props.scaleNames.map(function(object, i){
						                  return <option value={object}>{object}</option>;
						                })}
		  							</select>
	  							</li>
	  						</ul>
	  					</div>
	  				</div>
	  			</div>;
  	}
});