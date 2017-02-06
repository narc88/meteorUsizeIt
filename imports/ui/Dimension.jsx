
Dimension = React.createClass({

	render() {
  		return (
      		<div class="">
        			<label for={ this.props.dimension.id + this.props.index }>{this.props.dimension.value}</label>
              <div className={ 'dimension-index-'+ this.props.index }>
                <input id={ this.props.dimension.id + this.props.index } type="range" name="" disabled="" value={this.props.dimension.value} />
              </div>
    			</div>
  		  );
  }
});

 