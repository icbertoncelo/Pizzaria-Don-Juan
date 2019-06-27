import { createReducer, createActions } from 'reduxsauce';
import immutable from 'seamless-immutable';

/**
 * Types & Creators
 */
const { Types, Creators } = createActions({
  getOrderRequest: null,
  getOrderSuccess: ['data'],
  getOrderFailure: ['error'],
});

export const OrderTypes = Types;
export default Creators;

/**
 * Initial State
 */
export const INITIAL_STATE = immutable({
  data: [],
  loading: false,
  error: null,
});

/**
 * Reducers
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ORDER_REQUEST]: state => state.merge({ loading: true, error: null }),
  [Types.GET_ORDER_SUCCESS]: (state, { data }) => state.merge({ data, loading: false, error: null }),
  [Types.GET_ORDER_FAILURE]: (state, { error }) => state.merge({ error, loading: false }),
});
