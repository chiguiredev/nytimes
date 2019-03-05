import { all, takeLatest, put, fork, call } from 'redux-saga/effects';
import actions from './actions';
import { apiGetNews } from '../../api/apiCalls';
import { push } from 'connected-react-router';

export function* watchRequestNews() {
  yield takeLatest(actions.FETCH_NEWS, function*(action) {
    try {
      const result = yield call (apiGetNews, action.url);
      yield put({
        type: actions.FETCH_NEWS_SUCCES,
        newsState: actions.FETCH_NEWS_SUCCES,
        news: result.response.docs,
      });

      yield put(push('/feed'));

    } catch (err) {
      console.error(err);
      yield put({ type: actions.FETCH_NEWS_ERROR });
    }
  });
}

export function* watchUpdateNewsFormValue() {
  yield takeLatest(actions.UPDATE_FORM_VALUE, function* (action) {
    yield put ({
      type: actions.UPDATE_VALUE,
      propety: action.propety,
      value: action.value,
    })
  });
}

export default function* rootSaga() {
  yield all([
    fork(watchRequestNews),
    fork(watchUpdateNewsFormValue),
  ]);
}
