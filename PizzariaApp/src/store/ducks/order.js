import { createReducer, createActions } from 'reduxsauce';
import immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  finishOrderRequest: ['order'],
  finishOrderSuccess: ['data'],
  finishOrderFailure: null,
  getOrdersRequest: ['user_id'],
  getOrdersSuccess: ['data'],
  getOrdersFailure: null,
});

export const OrderTypes = Types;
export default Creators;

export const INITIAL_STATE = immutable({
  data: [],
  error: false,
  loading: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FINISH_ORDER_REQUEST]: state => state.merge({ loading: true, error: false }),
  [Types.FINISH_ORDER_SUCCESS]: (state, { data }) => state.merge({ data, loading: false, error: false }),
  [Types.FINISH_ORDER_FAILURE]: state => state.merge({ loading: false, error: true }),
  [Types.GET_ORDERS_REQUEST]: state => state.merge({ loading: true, error: false }),
  [Types.GET_ORDERS_SUCCESS]: (state, { data }) => state.merge({ data, loading: false, error: false }),
  [Types.GET_ORDERS_FAILURE]: state => state.merge({ loading: false, error: true }),
});
