import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from "./store/reducers";
import Router from './router'
import './App.css';
import Header from './layout/header'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

function App() {
  return (
  	<Provider store={createStoreWithMiddleware(rootReducer)}>
		<div className="grey lighten-3">
			<Header/>
			<div style={{ marginTop: '50px' }}>
				<Router/>
			</div>
		</div>
    </Provider>
  );
}

export default App;
