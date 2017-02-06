
Comment = React.createClass({
	render() {
	  	return 	<div>
		            <span>{this.props.comment.username}: {this.props.comment.text}</span>
		      	</div>
	  	}
});