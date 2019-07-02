import { combineReducers } from 'redux';

import { reducer as auth } from './auth';
import { reducer as products } from './products';
import { reducer as types } from './types';
import { reducer as sizes } from './sizes';

export default combineReducers({
  auth,
  products,
  types,
  sizes,
});
