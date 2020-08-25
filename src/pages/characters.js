import React from 'react';
import SearchCharactersByName from "../context/index"
import { showCharacters } from "../store/actions";
import { connect } from 'react-redux'
import CardMarvel from "../components/card";
import Loading from "../components/loading";

class Characters extends React.Component {
	static contextType = SearchCharactersByName;
	state = {
		show: false,
		charactersAll: [],
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
			<div className="row container">
				{
					this.state.loading ?
					<Loading />
					:
					this.context[0] ?
					this.context.map(character => <CardMarvel data={character} key={character.id} modal={character.id}/>)
					:
					this.props.characters.map(character => <CardMarvel data={character} key={character.id} modal={character.id}/>)
				}
			</div>			
		)
	}
}

const mapStateToProps = state => ({
	characters: state.characters.characters
})

export default connect(mapStateToProps, { showCharacters })(Characters)