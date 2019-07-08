import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { ProductsTypes } from '../ducks/products';
import { TypesProductsTypes } from '../ducks/types';
import { SizesProductsTypes } from '../ducks/sizes';
import { OrderTypes } from '../ducks/order';

import {
  init, login, logout, register,
} from './auth';
import { getProducts } from './products';
import { getTypes } from './types';
import { getSizes } from './sizes';
import { finishOrder, getOrders } from './order';

export default function* rootSaga() {
  yield all([
    init(),
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.LOGOUT, logout),
    takeLatest(AuthTypes.REGISTER_REQUEST, register),
    takeLatest(ProductsTypes.GET_PRODUCTS_REQUEST, getProducts),
    takeLatest(TypesProductsTypes.GET_TYPES_PRODUCTS_REQUEST, getTypes),
    takeLatest(SizesProductsTypes.GET_SIZES_PRODUCTS_REQUEST, getSizes),
    takeLatest(OrderTypes.FINISH_ORDER_REQUEST, finishOrder),
    takeLatest(OrderTypes.GET_ORDERS_REQUEST, getOrders),
  ]);
}
