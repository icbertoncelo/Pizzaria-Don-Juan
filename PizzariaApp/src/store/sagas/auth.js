import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';
import NavigationService from '~/services/navigation';

import AuthActions from '../ducks/auth';

export function* init() {
  const user = yield call([AsyncStorage, 'getItem'], '@DonJuan:user');

  if (user) {
    const data = JSON.parse(user);
    yield put(AuthActions.loginSuccess(data));
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
}

export function* register({ name, email, password }) {
  try {
    const { data } = yield call(api.post, 'users', { name, email, password });

    yield put(AuthActions.registerSuccess(data));
    NavigationService.navigate('Login');
  } catch (err) {
    console.tron.log(err);
  }
}
