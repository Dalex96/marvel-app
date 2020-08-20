import React from 'react';
import imgBaner from '../../../imagenes/ci.jpg'

class CardMarvel extends React.Component {
	render(){
		return (
			<div>
				<div className="card mb-3" style="max-width: 540px;">
				  <div className="row no-gutters">
				    <div className="col-md-4">
<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>				    
				      <img src={imgBaner} className="card-img" alt="...">
				    </div>
				    <div className="col-md-8">
				      <div className="card-body">
				        <h5 className="card-title">Card title</h5>
				        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
				      </div>
				    </div>
				  </div>
				</div>
			</div>
		)
	}
}

export default CardMarvel