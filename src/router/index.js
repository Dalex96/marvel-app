import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Marvel from '../pages/main'; 
import Description from '../pages/description'; 

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Marvel} />
			<Route exact path="/description" component={Description} />
		</Switch>
	)
}

export default Routes;