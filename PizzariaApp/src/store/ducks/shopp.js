import { createReducer, createActions } from 'reduxsauce';
import immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  addItemSuccess: ['data'],
  removeItemSuccess: ['id'],
  calculateValue: null,
});

export const ShoppTypes = Types;
export default Creators;

export const INITIAL_STATE = immutable({
  data: [],
  totalValue: 0,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM_SUCCESS]: (state, { data }) => state.merge({
    data: [...state.data, data],
  }),
  [Types.REMOVE_ITEM_SUCCESS]: (state, { id }) => state.merge({ data: state.data.filter(item => item.id !== id) }),
  [Types.CALCULATE_VALUE]: state => state.merge({
    totalValue: state.data.reduce((acumulate, item) => acumulate + item.unit_price, 0),
  }),
});
