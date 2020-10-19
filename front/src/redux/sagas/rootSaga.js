import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import googleSaga from './googleSaga';

export default function* () {
  yield all([
    authSaga(),
    googleSaga(),
  ]);
}
