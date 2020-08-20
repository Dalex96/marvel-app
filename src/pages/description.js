import React from 'react';
import './style.css'

class Description extends React.Component {
	render(){
		return (
			<div className="container margin-card-description">
			  <div className="row">
				<div className="col s12 m12 12 marginContent">
					<div className="card horizontal horizontal-description" style={{boxShadow: '0px 0px 0px black'}}>
						<div className="card-image">
							<img src="https://mlm-s2-p.mlstatic.com/3652-MLM45677850_1313-O.jpg"/>
						</div>
						<div className="card-stacked">
							<div className="card-content">
								<strong className="text-title-card">
									Name
								</strong>
								<div className="infoTarget">
									<p><strong>Published: May 29, 2019</strong></p>
									<p><strong>Write: Nick Spencer</strong></p>
									<p><strong>Penciler: Humberto Ramos</strong></p>
									<p><strong>Cover Artist: Humberto Ramos</strong></p>
								</div>

								<p>I am a very simple card. I am good at containing small bits of information.
								I am a very simple card. I am good at containing small bits of information.
								I am a very simple card. I am good at containing small bits of information.
								I am a very simple card. I am good at containing small bits of information.
								</p>
							</div>
						</div>
					</div>
				</div>
			  </div>
			</div>
		)
	}
}

export default Description