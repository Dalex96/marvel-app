import React from 'react';
import CardMarvel from "../components/card";
import ModalCard from "../components/modal-card";

class Main extends React.Component {

	state = {
		show: false
	}

	render(){
		return (
			<div className="row container">
				<ModalCard />
				<CardMarvel />
				<CardMarvel />
				<CardMarvel />
				<CardMarvel />
				<CardMarvel />
				<CardMarvel />
				<CardMarvel />
				<CardMarvel />
			</div>			
		)
	}
}


export default Main