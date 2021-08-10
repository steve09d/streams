import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import Routes from './routes/Routes';
import Header from './header';

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <Header />
        <Switch>
          <Route component={Routes}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
