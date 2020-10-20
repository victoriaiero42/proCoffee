import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import articleSaga from './articleSaga';
import googleSaga from './googleSaga';
import loginSaga from './loginSaga';

export default function* () {
  yield all([
    authSaga(),
    articleSaga(),
    googleSaga(),
    loginSaga(),
  ]);
}
