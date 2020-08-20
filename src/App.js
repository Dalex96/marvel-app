import React from 'react';
import Router from './router'
import './App.css';
import Header from './layout/header'

class App extends React.Component {

	render(){
		return(
			<div className="grey lighten-3">
				<Header/>
				<div style={{ marginTop: '50px' }}>
					<Router/>
				</div>
			</div>
		) 
	}
}

export default App;
