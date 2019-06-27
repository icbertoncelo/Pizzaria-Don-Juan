import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import history from './history';

import Login from '~/pages/Login';
import Main from '~/pages/Main';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/login" component={() => <Login />} />
      <Route path="/" component={() => <Main />} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
