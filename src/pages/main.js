import React from 'react';
import { showCharacters } from "../store/actions";
import { connect } from 'react-redux'
import CardMarvel from "../components/card";

class Main extends React.Component {

	state = {
		show: false
	}

	componentDidMount(){
		this.props.showCharacters()
	}	

	render(){
		return (
			<div className="row container">
				{
				this.props.characters === null ?
				<div className="col s12 m12">
					<div className="card" style={{ padding:'30px' }}>
						<div className="card-content">
							<h1 className="card-title" style={{ fontSize: '25px', fontWeight: 'bold'}}>Too Many Requests #429</h1>
							<span className="card-title" style={{ fontSize: '18px'}}>
								You have exceeded your rate limit.  Please try again later.
							</span>						
						</div>
					</div>
				</div>
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

export default connect(mapStateToProps, { showCharacters })(Main)