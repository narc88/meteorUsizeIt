
DimensionForm = React.createClass({
	render() {
    let default_value = 50;
  	return (
      		<div className="row dimension col-xs-12 col-md-12">
            <div className="panel panel-success">
              <div className="panel-heading">
                <h3 className="panel-title"> {dimension.name} </h3>
              </div>
              <div className="panel-body">
                <div className="col-xs-6 col-md-6 left-label">
                  {dimension.description}
                </div>
                <div className="col-xs-6 col-md-6">
                  <div className="row">
                    <div className="col-xs-12 col-md-12">
                      <input className="dim-selector" id={dimension.name+'slider'} type='range' name='' value={default_value}/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6 col-md-6 left-label">
                      | {dimension.lowRef}
                    </div>
                    <div className="col-xs-6 col-md-6 left-label">
                      | {dimension.highRef}
                    </div>
                  </div>
                </div>
              </div>
            </div>
      		</div>
  		);
  }
});