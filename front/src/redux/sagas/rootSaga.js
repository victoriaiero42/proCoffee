import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import articleSaga from './articleSaga';

export default function* () {
  yield all([
    authSaga(),
    articleSaga(),
  ]);
}
