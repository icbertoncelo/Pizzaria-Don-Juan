import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import OrderActions from '../ducks/order';

export function* getOrders() {
  try {
    const { data } = yield call(api.get, '/orders');

    yield put(OrderActions.getOrderSuccess(data));
  } catch (err) {
    console.tron.log(err);
  }
}
