import { combineReducers } from 'redux';

import { reducer as auth } from './auth';
import { reducer as products } from './products';

export default combineReducers({
  auth,
  products,
});
