import { createReducer, createActions } from 'reduxsauce';
import immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  addItemSuccess: ['data'],
  removeItemSuccess: ['id'],
  // postItemSuccess: ['data'],
});

export const ShoppTypes = Types;
export default Creators;

export const INITIAL_STATE = immutable({
  data: [],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM_SUCCESS]: (state, { data }) => state.merge({ data: [...state.data, data] }),
  [Types.REMOVE_ITEM_SUCCESS]: (state, { id }) => state.merge({ data: state.data.filter(item => item.id !== id) }),
});
