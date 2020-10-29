import { takeEvery, put, call } from 'redux-saga/effects';
// import { push } from 'connected-react-router'
// import { push } from 'react-router-redux';
// import history from '../../history';

import { START_GOOGLE } from '../actionTypes';

import { authenticateGoogleUser } from '../actions/authActions';

async function fetchGoogle() {
  console.log('фетч ту гугл начало');
  const request = await fetch('/api/goodGoogle', {
    credentials: 'include',
  });
  console.log(request, 'запрос на бэк');
  const response = await request.json();
  console.log(response, 'ответ бэка!!');
  // history.push('/top');
  return response;
}

function* worker(action) {
  const resp = yield call(fetchGoogle, action.payload);
  yield put(authenticateGoogleUser(resp));
  // console.log('редиректи, засранец!');
  // yield put(push('/home'));
}

function* watcher() {
  yield takeEvery(START_GOOGLE, worker);
}

export default watcher;
