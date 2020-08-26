import React from 'react';
import { searchCharacter } from "./store/actions";
import { connect } from 'react-redux'
import {SearchCharactersByName, FavCharacters} from "./context/index"
import Router from './router'
import Header from './layout/header'


class Main extends React.Component {

	state = {
		favorites: []
	}

	searchCharacter = (name) =>{
		this.props.searchCharacter(name)
	}

	listFavorites = (status) =>{
		if(status){
			var favoritos = localStorage.getItem("favoritos") || "[]";
			var favorites = JSON.parse(favoritos);
			this.setState({favorites:favorites})
		}else{
			this.setState({favorites:[]})
		}
	}

	render(){
		return (
			<div>
				<div className="grey lighten-3">
					<SearchCharactersByName.Provider value={this.props.search_characters}>
						<Header search={this.searchCharacter} fav={this.listFavorites}/>
						<div style={{ marginTop: '50px' }}>
							<FavCharacters.Provider value={this.state.favorites}>
								<Router/>
							</FavCharacters.Provider>
						</div>
					</SearchCharactersByName.Provider>
				</div>
			</div>			
		)
	}
}

const mapStateToProps = state => ({
	search_characters: state.characters.search_characters
})

export default connect(mapStateToProps, { searchCharacter })(Main)