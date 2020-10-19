import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Registro from './pages/Registro';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import LogIn from './pages/LogIn';
import Dashboard from './pages/Dashboard';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Registro} />
      <Route path='/login' component={LogIn} />
      <Route path='/dashboard' component={Dashboard} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
