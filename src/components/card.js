import React from 'react';
import { showComicsCharacter } from "../store/actions";
import { connect } from 'react-redux'
import ModalCard from "./modal-card";
import '../styles/css/style-components.css'

class CardMarvel extends React.Component {

	state = {
		favoCard: false
	}

	favorite = () => {
		this.setState({
			favo: this.state.favoCard ? false : true
		})
	}

	buscarComics = () =>{
		this.props.showComicsCharacter(this.props.modal)
	}

	render(){
		return (
			<div>
				<ModalCard comics={this.props.comics_character} nameCharacter={this.props.data.name} modal={this.props.modal}/>
				<div className="col s12 m6 l3">

					<a className="waves-light modal-trigger" onClick={this.buscarComics} href={`#modal${this.props.modal}`}>
					<div className="card">
						<div className="card-image">
							<img className="imgCard" src={`${this.props.data.thumbnail.path}.${this.props.data.thumbnail.extension}`} alt="descriptionmarvel3"/>
							<span className="card-title">
								{this.props.data.name}
							</span>
				      	{
				      		this.state.favoCard ?
								<i id="iconStartCard" className="material-icons">star_border</i>								
					        :
			    				<i id="iconStartCard" className="material-icons">star</i>
				      	}							
						</div>
					</div>
					</a>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	comics_character: state.comics.comics_character
})

export default connect(mapStateToProps, { showComicsCharacter })(CardMarvel)