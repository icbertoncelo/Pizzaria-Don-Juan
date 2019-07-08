import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import store from '~/store';
import NavigationService from '~/services/navigation';

import OrderActions from '../ducks/order';

export function* finishOrder({ order }) {
  try {
    const {
      cep, notes, total_value, user_id,
    } = order;

    const { data } = yield call(api.post, `orders/${user_id}`, { cep, notes, total_value });

    const items = store.getState().shopp.data;
    yield call(api.post, `orderitems/${data.id}`, { items });

    yield put(OrderActions.finishOrderSuccess(data));
    NavigationService.navigate('Main');
  } catch (err) {
    yield put(OrderActions.finishOrderFailure());
  }
}

export function* getOrders({ user_id }) {
  try {
    const { data } = yield call(api.get, `orders/${user_id}`);

    yield put(OrderActions.getOrdersSuccess(data));
  } catch (err) {
    yield put(OrderActions.getOrdersFailure());
  }
}
