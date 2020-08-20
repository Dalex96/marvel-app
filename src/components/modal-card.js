import React from 'react';
import CardDescription from './card-description'
import M from 'materialize-css'
import './style.css'

class ModalCard extends React.Component {

	componentDidMount(){
		M.AutoInit()
	}

	render(){
		return (
			<div>

			  <div id="modal1" className="modal disableScroll">
			    <div className="modal-content">
			      <h5>Spider-Man
				      <a href="#" className="modal-close">
				      	<i className="material-icons prefix" style={{position: 'relative', left:'70%', bottom: '25px'}}>close</i>
				      </a>
			      </h5>
			      <div className="row scrollhabilitado contentCard">
			      	<CardDescription/>
			      	<CardDescription/>
			      	<CardDescription/>
			      	<CardDescription/>
			      	<CardDescription/>
			      	<CardDescription/>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default ModalCard