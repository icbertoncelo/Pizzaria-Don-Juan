import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '~/services/api';

import AuthActions from '../ducks/auth';

export function* login({ email, password }) {
  try {
    const { data } = yield call(api.post, 'sessions', { email, password });

    if (data.user.admin === true) {
      localStorage.setItem('@DonJuan:token', data.token);

      yield put(AuthActions.loginSuccess(data));
      yield put(push('/'));
    }
  } catch (err) {
    console.tron.log(err);
  }
}

export function* logout() {
  localStorage.removeItem('@DonJuan:token');
  localStorage.removeItem('@DonJuan:isAdmin');

  yield put(push('/login'));
}
