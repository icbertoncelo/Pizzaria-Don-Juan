import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as auth } from './auth';
import { reducer as order } from './order';

export default history => combineReducers({
  router: connectRouter(history),
  auth,
  order,
});
