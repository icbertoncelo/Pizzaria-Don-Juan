import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import TypesProductsActions from '../ducks/types';

export function* getTypes({ id }) {
  try {
    const { data } = yield call(api.get, `types/${id}`);

    yield put(TypesProductsActions.getTypesProductsSuccess(data));
  } catch (err) {
    yield put(TypesProductsActions.getTypesProductsFailure());
  }
}
