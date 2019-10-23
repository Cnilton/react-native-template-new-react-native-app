import {all, takeLatest} from 'redux-saga/effects';
import {LoginTypes} from '../ducks/login';

import {login} from './login';

export default function* rootSaga() {
  return yield all([takeLatest(LoginTypes.LOGIN_REQUEST, login)]);
}
