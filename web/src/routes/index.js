import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import history from './history';

import PrivateRoute from './private';
import GuestRoute from './guest';

import Login from '~/pages/Login';
import Main from '~/pages/Main';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <GuestRoute path="/login" component={() => <Login />} />
      <PrivateRoute exact path="/" component={() => <Main />} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
