import React from 'react';
import '../styles/css/style-components.css'

class CardDescription extends React.Component {

	render(){
		return (
			<div className="col s12 m12" style={{padding: '0px'}}>
			<a href={`/comic/${this.props.idComic}/${this.props.dataComic.title}`}>
				<div className="card horizontal" id="cardShadowsHorizon">
					<div className="card-image">
						<img id="imgCardDescription" src={`${this.props.dataComic.thumbnail.path}.${this.props.dataComic.thumbnail.extension}`} alt="descriptionmarvel"/>
					</div>
					<div className="card-stacked">
						<div className="card-content descriptionComic">
							<strong className="">
							{this.props.dataComic.title}
							<i className="material-icons prefix" id="iconFav">star_border</i>
							</strong>
							<p className="">
								{this.props.dataComic.description}
							</p>
						</div>
					</div>
				</div>
				</a>
			</div>
		)
	}
}

export default CardDescription