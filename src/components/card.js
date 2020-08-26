import React from 'react';
import { showComicsCharacter } from "../store/actions";
import { connect } from 'react-redux'
import ModalCard from "./modal-card";
import '../styles/css/style-components.css'

class CardMarvel extends React.Component {

	state = {
		favoCard: false,
		favorites: []
	}

	componentDidMount(){
		this.listFavorites()
	}

	favorite = () => {
		var datos = this.props.data
		var favoritos = localStorage.getItem("favoritos") || "[]";
		favoritos = JSON.parse(favoritos);
		var posLista = favoritos.findIndex((e) => { return e.id === datos.id; });
		if (posLista > -1) {
			favoritos.splice(posLista, 1);
		} else {
			favoritos.push(datos);
		}
		localStorage.setItem("favoritos", JSON.stringify(favoritos));
		this.setState({
			favoCard: this.state.favoCard ? false : true
		})
		this.listFavorites()
	}

	buscarComics = () =>{
		this.props.showComicsCharacter(this.props.modal)
	}

	listFavorites = () => {
		var favoritos = localStorage.getItem("favoritos") || "[]";
		var favorites = JSON.parse(favoritos)
		favorites.map( favo => {
			if(this.props.modal === favo.id){
				this.setState({favoCard: true})
			}

		})
	}

	render(){
		return (
			<div>
				<ModalCard comics={this.props.comics_character} nameCharacter={this.props.data.name} modal={this.props.modal}/>
				<div className="col s12 m6 l3">

					<div className="card">
						<div className="card-image">
					<a className="waves-light modal-trigger" onClick={this.buscarComics} href={`#modal${this.props.modal}`}>
							<img className="imgCard" src={`${this.props.data.thumbnail.path}.${this.props.data.thumbnail.extension}`} alt="descriptionmarvel3"/>
							<span className="card-title">
								{this.props.data.name}
							</span>
					</a>
				      	{
				      		!this.state.favoCard ?
								<a href={() => false} onClick={this.favorite}><i id="iconStartCard" className="material-icons">star_border</i></a>
					        :
			    				<a href={() => false} onClick={this.favorite}><i id="iconStartCard" className="material-icons">star</i></a>
				      	}							
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	comics_character: state.comics.comics_character
})

export default connect(mapStateToProps, { showComicsCharacter })(CardMarvel)