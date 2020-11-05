import { takeEvery, put, call } from 'redux-saga/effects';
import { START_RATING } from '../actionTypes';
import { setRatingSaga } from '../actions/ratingActions';

async function fetchItems(payload) {
  const { rating, id } = payload;
  const numrate = Number(rating);
  // const response = await fetch("/raiting", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     id,
  //     numrate,
  //   })
  // });
  // const rate = await response.json()
  // console.log(rate, '<<<');
  // // console.log(res);
  // return rate
}
function* worker(action) {
  const items = yield call(fetchItems, action.payload);
  yield put(setRatingSaga(items));
}

function* watcher() {
  yield takeEvery(START_RATING, worker);
}

export default watcher;
