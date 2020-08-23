import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Marvel from '../pages/characters'; 
import Description from '../pages/description'; 

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Marvel} />
			<Route exact path="/comic/:idComic/:name" component={Description} />
			<Route exact path="/*"><Redirect to="/" /></Route>
		</Switch>
	)
}

export default Routes;