import React from 'react';
import { searchCharacter } from "./store/actions";
import { connect } from 'react-redux'
import SearchCharactersByName from "./context/index"
import Router from './router'
import Header from './layout/header'


class Main extends React.Component {

	componentDidMount(){

	}

	searchCharacter = (name) =>{
		console.log(name)
		this.props.searchCharacter(name)
	}

	render(){
		return (
			<div>
				<div className="grey lighten-3">
					<SearchCharactersByName.Provider value={this.props.search_characters}>
						<Header search={this.searchCharacter}/>
						<div style={{ marginTop: '50px' }}>
							<Router/>
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