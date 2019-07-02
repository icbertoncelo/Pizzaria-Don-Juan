import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';
import NavigationService from '~/services/navigation';

import AuthActions from '../ducks/auth';

export function* init() {
  const data = yield call([AsyncStorage, 'getItem'], '@DonJuan:user');
  const user = JSON.parse(data);

  if (user.token) {
    yield put(AuthActions.loginSuccess(user));
  }

  yield put(AuthActions.initCheckSuccess());
}

export function* login({ email, password }) {
  try {
    const { data } = yield call(api.post, 'sessions', { email, password });

    if (data.user.admin !== true) {
      yield call([AsyncStorage, 'setItem'], '@DonJuan:user', JSON.stringify(data));

      yield put(AuthActions.loginSuccess(data));
      NavigationService.navigate('Main');
    }
  } catch (err) {
    console.tron.log(err);
  }
}

export function* logout() {
  yield call([AsyncStorage, 'clear']);

  // yield put(push('/login'));
}
