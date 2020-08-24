import React from 'react';
import Moment from 'moment';
import { showComic, showComicURL } from "../store/actions";
import { connect } from 'react-redux'
import '../styles/css/style-pages.css'
const GLOBAL = require("../state/index")

class Description extends React.Component {

	state = {
		urlComic: "" 
	}

	componentDidMount(){
		this.props.showComic(this.props.match.params.idComic)
		setTimeout(() => {
			this.props.comic[0].urls.map((res) => {
				if(res.type === "detail"){
					GLOBAL.URL_COMIC = res.url
					this.setState({urlComic:res.url})
				}
			})
		}, 1000);
	}

	render(){
		return (
			<div className="container margin-card-description">
			  <div className="row">
				{
					this.props.comic.map((comic, i) =>
					<div key={i} className="col s12 m12 12 marginContent">
						<div className="card horizontal horizontal-description" style={{boxShadow: '0px 0px 0px black'}}>
							<div className="card-image">
								<img className="" alt="descriptionmarvel2" src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}/>
							</div>
							<div className="card-stacked">
								<div className="card-content">
									<strong className="text-title-card">
										{comic.title}
									</strong>
									<div className="infoTarget">
										{
											comic.dates.map((date, i) =>
												date.type === 'onsaleDate' ?
												<p key={i}><strong>Published: {Moment(date.date).format('LL')}</strong></p>
												:
												<p key={i}><strong></strong></p>
											)
										}									
										{
											comic.creators.items.map((creator, i) => 
												<p key={i}><strong>{creator.role}: {creator.name}</strong></p>
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
	comic: state.comics.comic,
	comic_url: state.comics.comic_url
})

export default connect(mapStateToProps, { showComic, showComicURL })(Description)