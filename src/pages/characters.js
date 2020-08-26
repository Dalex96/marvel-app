import React from 'react';
import { ContextCharacters } from "../context/index"
import ProvideCombinedContext from "../context/contextCombine"
import { showCharacters } from "../store/actions";
import { connect } from 'react-redux'
import CardMarvel from "../components/card";
import Loading from "../components/loading";

class CharactersContext extends React.Component {
	static contextType = ContextCharacters;
	state = {
		show: false,
		loading: true
	}

	componentDidMount(){
		var i = 0;
		this.props.showCharacters(i)
		setTimeout(() => {
			this.setState({loading: false})
		}, 1000);		
	}	

	render(){
		return (
			<div>
			<div className="row container">
				{
					this.state.loading ?
						<Loading/>
					:
						!this.context.FavCharacters[0] ?
							this.context.SearchCharactersByName[0] ?
								this.context.SearchCharactersByName.map(character => 
									<CardMarvel data={character} key={character.id} modal={character.id}/>
								)
							:
							this.props.characters.map(character => 
								<CardMarvel data={character} key={character.id} modal={character.id}/>
							)
						:
						this.context.FavCharacters.map(FavCharacter => 
							<CardMarvel data={FavCharacter} key={FavCharacter.id} modal={FavCharacter.id}/>
						)
				}
			</div>			
			</div>			
		)
	}
}

const Characters = props => {
  return (
    <ProvideCombinedContext>
      <CharactersContext {...props} />
    </ProvideCombinedContext>
  );
};

const mapStateToProps = state => ({
	characters: state.characters.characters
})

export default connect(mapStateToProps, { showCharacters })(Characters)