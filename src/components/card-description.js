import React from 'react';
import './style.css'

class CardDescription extends React.Component {
	render(){
		return (
			<div className="col s12 m12" style={{padding: '0px'}}>
				<a href="/description" className="collection-item pulse">
				<div className="card horizontal" style={{boxShadow: '0px 0px 0px black', margin:'5px'}}>
					<div className="card-image">
						<img src="https://mlm-s2-p.mlstatic.com/3652-MLM45677850_1313-O.jpg" height="110"/>
					</div>
					<div className="card-stacked">
						<div className="card-content">
							<strong className="">
							Name
							<i className="material-icons prefix" style={{position: 'relative', left:'3px', top: '6px'}}>star_border</i>
							</strong>
							<p>I am a very simple card. I am good at containing small bits of information.
							I am a very simple card. I am good at containing small bits of information.
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