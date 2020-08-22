import React from 'react';
import { showComicsCharacter } from "../store/actions";
import { connect } from 'react-redux'
import ModalCard from "./modal-card";

class CardMarvel extends React.Component {

	state = {
		favoCard: false
	}

	componentDidMount(){
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
				<div className="col s12 m3">

					<a className="waves-light modal-trigger" onClick={this.buscarComics} href={`#modal${this.props.modal}`}>
					<div className="card">
						<div className="card-image">
							<img className="" width="500" height="300" src={`${this.props.data.thumbnail.path}.${this.props.data.thumbnail.extension}`} alt="description of image"/>
							<span className="card-title" style={{ fontSize: '15px', fontWeight: 'bold'}}>
								{this.props.data.name}
							</span>
				      	{
				      		this.state.favoCard ?
								<i className="material-icons prefix card-title" style={{
			    					position: 'apsolute', left:'70%', bottom: '240px'

			    				}}>star_border</i>								
					        :
			    				<i className="material-icons prefix card-title" style={{
			    					position: 'apsolute', left:'70%', bottom: '240px'

			    				}}>star</i>
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