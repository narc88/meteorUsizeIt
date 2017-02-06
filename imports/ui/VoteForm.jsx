
VoteForm = React.createClass({

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
      		<div>
            {this.data.vote.dimensions.map(function(object, i){
              return <DimensionForm dimension={object} />;
            })}
            <div className="row">
              <div className="col-md-12">
                <form id="form-vote" method="POST" action={'/games/'+layout.gameUid+'/players/'+layout.username+'/vote'}>
                  <input id="vote" name="vote" type="hidden"/>
                  <input className="btn btn-success" id="submit-vote" name="vote" type="submit" value="Send Vote"/>
                </form>
              </div>
            </div>
      		</div>
  		);
  }
});