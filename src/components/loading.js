import React from 'react';

class Loading extends React.Component {

	state = {
		loading: false,
	}

	componentDidMount(){
	}	

	render(){
		return (
			<div className="row container">
				<div className="col s12 m12 12">
				  <div className="preloader-wrapper active" id="loading">
				    <div className="spinner-layer spinner-red-only">
				      <div className="circle-clipper left">
				        <div className="circle"></div>
				      </div><div className="gap-patch">
				        <div className="circle"></div>
				      </div><div className="circle-clipper right">
				        <div className="circle"></div>
				      </div>
				    </div>
				  </div>
			  	</div>
			</div>			
		)
	}
}

export default Loading