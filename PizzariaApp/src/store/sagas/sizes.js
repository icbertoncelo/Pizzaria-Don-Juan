import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import SizesProductsActions from '../ducks/sizes';

export function* getSizes({ id }) {
  try {
    const { data } = yield call(api.get, `sizes/${id}`);

    yield put(SizesProductsActions.getSizesProductsSuccess(data));
  } catch (err) {
    yield put(SizesProductsActions.getSizesProductsFailure());
  }
}
