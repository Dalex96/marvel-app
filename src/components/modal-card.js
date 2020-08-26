import React from 'react';
import CardDescription from './card-description'
import M from 'materialize-css'
import '../styles/css/style-components.css'

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
			      <a className="modal-close" href={() => false}>
			      	<i className="material-icons" id="iconCloseModal">close</i>
			      </a>
			      <h5>
			      	{this.props.nameCharacter}
			      </h5>
			      <div className="row scrollhabilitado contentCard">
					{
						this.props.comics[0] ?
						this.props.comics.map(comic => <CardDescription dataComic={comic} key={comic.id} idComic={comic.id}/>)
						:
						<p></p>
					}			      
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}

export default ModalCard