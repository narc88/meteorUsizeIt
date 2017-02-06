Login = React.createClass({
	getInitialState() {
    	return {
				username: '',
				gameId:'',
				isJoining: false
			}
  	},
	updateState(e) {
		var target = {};
		var id = e.target.id;
		target[id] = e.target.value
      	this.setState(target);
   	},
   	handleSubmit(){
   		fetch('/games', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				    organizerName: this.state.username,
				    username: this.state.username
				})
			}).then((response) => response.text())
			.then((responseText) => {
				let response = JSON.parse(responseText);
			  	this.props.storeUsername(this.state.username, response, response.layout.gameUid);
			}).catch((error) => {
			  	console.warn(error);
			});
   	},
   	handleJoin(){
   		fetch('/games/' + this.state.gameId + '/join', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				    username: this.state.username
				})
			}).then((response) => response.text())
			.then((responseText) => {
				let response = JSON.parse(responseText);
			  	this.props.storeUsername(this.state.username, response, this.state.gameId);
			}).catch((error) => {
			  	console.warn(error);
			});
   	},
	renderField(id, label, field) {
	    return 	<div className='form-group'>
			      	<label htmlFor={id} className="control-label">{label}</label>
			      	<div>
			        	{field}
			     	</div>
			    </div>;
  	}, 
	renderTextInput(id, label) {
		var template = <input type="text" placeholder={label} name={id} className="form-control" id={id} onChange={this.updateState} value={this.state[id]}/>;
		return this.renderField( id, label, template);
	},
	toggleForm(){
		this.setState({isJoining: !this.state.isJoining});
	},
	render() {
			var form ,btn;
			if(this.state.isJoining){
				btn = <button type="button" className='btn btn-primary' onClick={this.toggleForm} > Create </button>;
				form = 	<span>
							<div className="form-group has-feedback">
								{this.renderTextInput('username', 'Username')}
							</div>
							<div className="form-group has-feedback">
								{this.renderTextInput('gameId', 'Game Id')}
							</div>
		          			<button type="button" id="btn-join" type="submit" className="btn btn-success btn-custom" onClick={this.handleJoin} > Join Session </button>
					    </span>;
			}else{
				btn = <button type="button" className='btn btn-success' onClick={this.toggleForm} > Join </button>;
				form = 	<span>
							<div className="form-group has-feedback">
								{this.renderTextInput('username', 'Username')}
							</div>
		          			<button type="button" id="btn-join" type="submit" className="btn btn-success btn-custom" onClick={this.handleSubmit} > Start Session </button>
					    </span>    		
			}
			return  <div>
						<div class="btn-group" role="group" aria-label="...">
						  	Click to switch: {btn}
						</div>
						<div id="center" className="fp-tableCell">
							<div id="join-section">
								<div className="panel panel-success">
									<div className="panel-body">
										{form}
									</div>
								</div>
							</div>
						</div>;
					</div>;
	}
});