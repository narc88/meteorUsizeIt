
Vote = React.createClass({

	sendVote(){
	    var vote = [];
	    $('.dim-selector').each(function(){
	      vote.push(parseInt($(this).val()));
	    })
	    socket.emit('playerVoted', JSON.stringify({ gameUid:'#{layout.gameUid}', username:'#{layout.username}', vote:vote}));
	    $('#vote').val(JSON.stringify(vote));
	},

	render() {
  		return (
      		<div className="col-xs-12 col-md-4 playerSection">
      			<div className="panel panel-success">
      				<div className="panel-heading">
      					<h3 className="panel-title">{this.props.vote.username}</h3>
      				</div>
      				<div className="panel-body">
      					{this.props.vote.dimensions.map(function(object, i){
			              return <Dimension dimension={object} index={i}/>;
			            })}
  					</div>
  				</div>
  			</div>
  		);
  }
});

 