import React from 'react';
import CardDescription from './card-description'
import M from 'materialize-css'
import './style.css'

class ModalCard extends React.Component {

	state = {
		load: true
	}

	componentDidMount(){
		M.AutoInit()
	}

	render(){
		return (
			<div>
			  <div id={`modal${this.props.modal}`} className="modal disableScroll">
			    <div className="modal-content">
				      <a className="modal-close">
				      	<i className="material-icons prefix" style={{position: 'absolute', left:'92%', bottom: '400px'}}>close</i>
				      </a>
			      <h5>{this.props.nameCharacter}
			      </h5>
			      <div className="row scrollhabilitado contentCard">
					{
						this.props.comics.map(comic => <CardDescription dataComic={comic} key={comic.id} idComic={comic.id}/>)
					}			      
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default ModalCard