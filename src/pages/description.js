import React from 'react';
import { showComic } from "../store/actions";
import { connect } from 'react-redux'
import './style.css'

class Description extends React.Component {

	componentDidMount(){
		this.props.showComic(this.props.match.params.idComic)
	}

	render(){
		return (
			<div className="container margin-card-description">
			  <div className="row">
				{
					this.props.comic.map(comic =>
					<div className="col s12 m12 12 marginContent">
						<div className="card horizontal horizontal-description" style={{boxShadow: '0px 0px 0px black'}}>
							<div className="card-image">
								<img className="" alt="description of image" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}/>
							</div>
							<div className="card-stacked">
								<div className="card-content">
									<strong className="text-title-card">
										{comic.title}
									</strong>
									<div className="infoTarget">
										<p><strong>Published: {comic.diamondCode}</strong></p>
										{
											comic.creators.items.map(creator => 
												<p key={creator.available}><strong>{creator.role}: {creator.name}</strong></p>
											)
										}
									</div>

									<p>{comic.description}</p>
								</div>
							</div>
						</div>
					</div>
					)
					}			  
				  </div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	comic: state.comics.comic
})

export default connect(mapStateToProps, { showComic })(Description)