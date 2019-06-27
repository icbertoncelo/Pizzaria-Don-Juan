import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as auth } from './auth';

export default history => combineReducers({
  router: connectRouter(history),
  auth,
});
