import { takeEvery, put, call } from 'redux-saga/effects';
import { useHistory } from 'react-router-dom';

import { START_GOOGLE } from '../actionTypes';

import { authenticateGoogleUser } from '../actions/authActions';

async function fetchGoogle() {
  const history = useHistory();
  console.log('фетч ту гугл начало');
  const request = await fetch('/api/goodGoogle');
  console.log(request, 'запрос на бэк');
  const response = await request.json();
  console.log(response, 'ответ бэка!!');
  history.push('/top');
  return response;
}

function* worker(action) {
  const resp = yield call(fetchGoogle, action.payload);
  yield put(authenticateGoogleUser(resp));
}

function* watcher() {
  yield takeEvery(START_GOOGLE, worker);
}

export default watcher;
