
StoryPanel = React.createClass({
	render() {
	  	return 	<div>
	        		<StoryCard story={this.props.story}></StoryCard>
	            	<CommentPanel comments={this.props.comments}></CommentPanel>
	      		</div>;
	}
});