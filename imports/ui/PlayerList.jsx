
PlayerList = React.createClass({
	render() {
  		return 	<div id="players-list-section" className="ui-sortable-handle">
					<label>Players in lobby</label>
					<table id="players-list" className="table table-striped table-bordered">
						<tbody>
							{this.props.users.map(function(object, i){
		                		return <PlayerCard user={object} />;
		              		})}
						</tbody>
					</table>
				</div>
  	}
});

