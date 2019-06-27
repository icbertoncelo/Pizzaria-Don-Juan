import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { OrderTypes } from '../ducks/order';

import { login, logout } from './auth';
import { getOrders } from './order';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.LOGOUT, logout),
    takeLatest(OrderTypes.GET_ORDER_REQUEST, getOrders),
  ]);
}
