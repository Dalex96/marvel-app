import React from 'react';
// import ModalCard from './modal-card'

class CardMarvel extends React.Component {

	state = {
		favoCard: false
	}

	favorite = () => {
		this.setState({
			favo: this.state.favoCard ? false : true
		})
	}

	render(){
		return (
			<div>
				<div className="col s12 m3">
					<a className="waves-light modal-trigger" href="#modal1">
					<div className="card">
						<div className="card-image">
							<img src="https://mlm-s2-p.mlstatic.com/3652-MLM45677850_1313-O.jpg" alt="description of image"/>
							<span className="card-title" style={{ fontSize: '15px', fontWeight: 'bold'}}>
								Name

							</span>
				      	{
				      		this.state.favoCard ?
								<i className="material-icons prefix card-title" style={{
			    					position: 'apsolute', left:'68%', bottom: '78%'

			    				}}>star_border</i>								
					        :
			    				<i className="material-icons prefix card-title" style={{
			    					position: 'apsolute', left:'68%', bottom: '78%'

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

export default CardMarvel