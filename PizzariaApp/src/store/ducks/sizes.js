import { createReducer, createActions } from 'reduxsauce';
import immutble from 'seamless-immutable';

const { Types, Creators } = createActions({
  getSizesProductsRequest: ['id'],
  getSizesProductsSuccess: ['data'],
  getSizesProductsFailure: null,
});

export const SizesProductsTypes = Types;
export default Creators;

export const INITIAL_STATE = immutble({
  data: [],
  loading: false,
  error: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_SIZES_PRODUCTS_REQUEST]: state => state.merge({ loading: true, error: false }),
  [Types.GET_SIZES_PRODUCTS_SUCCESS]: (state, { data }) => state.merge({ data, loading: false, error: false }),
  [Types.GET_SIZES_PRODUCTS_FAILURE]: state => state.merge({ loading: false, error: true }),
});
