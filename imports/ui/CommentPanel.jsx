
CommentPanel = React.createClass({
	render() {
	  	return (
	      		  <div id="comments-section" className="comments-section">
	                {this.props.comments.map(function(object, i){
	                  return <Comment comment={object} />;
	                })}
	                <form if="comments-form" className="form" action="">
	                	<div className="form-group">
		                	<label for="comments">Comments</label>
		                	<textarea id="comments" name="comments" className="form-control"></textarea>
	                	</div>
	                </form>
	      		  </div>
	  		);
  	}
});