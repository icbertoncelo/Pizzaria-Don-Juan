import { createReducer, createActions } from 'reduxsauce';
import immutble from 'seamless-immutable';

const { Types, Creators } = createActions({
  getTypesProductsRequest: ['id'],
  getTypesProductsSuccess: ['data'],
  getTypesProductsFailure: null,
});

export const TypesProductsTypes = Types;
export default Creators;

export const INITIAL_STATE = immutble({
  data: [],
  loading: false,
  error: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TYPES_PRODUCTS_REQUEST]: state => state.merge({ loading: true }),
  [Types.GET_TYPES_PRODUCTS_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
  [Types.GET_TYPES_PRODUCTS_FAILURE]: state => state.merge({ loading: false, error: true }),
});
