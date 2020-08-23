import React from 'react';
import './style.css'

class CardDescription extends React.Component {

	render(){
		return (
			<div className="col s12 m12" style={{padding: '0px'}}>
			<a href={`/comic/${this.props.idComic}/${this.props.dataComic.title}`}>
				<div className="card horizontal" style={{boxShadow: '0px 0px 0px black', margin:'5px'}}>
					<div className="card-image">
						<img src={`${this.props.dataComic.thumbnail.path}.${this.props.dataComic.thumbnail.extension}`} height="110" alt="description of image"/>
					</div>
					<div className="card-stacked">
						<div className="card-content descriptionComic">
							<strong className="">
							{this.props.dataComic.title}
							<i className="material-icons prefix" style={{position: 'relative', left:'3px', top: '6px'}}>star_border</i>
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