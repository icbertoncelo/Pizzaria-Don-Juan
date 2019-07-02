import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import ProductsActions from '../ducks/products';

export function* getProducts() {
  try {
    const { data } = yield call(api.get, 'products');

    yield put(ProductsActions.getProductsSuccess(data));
  } catch (err) {
    yield put(ProductsActions.getProductsFailure());
  }
}
