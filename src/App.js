import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from "./store/reducers";
import './App.css';
import Main from './main'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

class App extends React.Component {

	render(){
		return (
		<Provider store={createStoreWithMiddleware(rootReducer)}>
			<div className="grey lighten-3">
				<Main/>
			</div>
		</Provider>
	);
	}
}

export default App;