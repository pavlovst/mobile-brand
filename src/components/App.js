import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Overview from './Overview';

const App = () => (
<BrowserRouter>
  <div className="app-routes">
    <Switch>
      <Route path="/login" component={Login} /> 
	  <Route path="/Overview" component={Overview} />   	  
    </Switch>
  </div>  
  </BrowserRouter>
);

export default App;