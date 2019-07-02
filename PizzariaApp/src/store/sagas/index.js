import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { ProductsTypes } from '../ducks/products';

import {
  init, login, logout, register,
} from './auth';

import { getProducts } from './products';

export default function* rootSaga() {
  yield all([
    init(),
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.LOGOUT, logout),
    takeLatest(AuthTypes.REGISTER_REQUEST, register),
    takeLatest(ProductsTypes.GET_PRODUCTS_REQUEST, getProducts),
  ]);
}
