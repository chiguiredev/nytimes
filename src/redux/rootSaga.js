import { all, fork } from 'redux-saga/effects';
import newsSagas from './News/sagas';
export default function* rootSaga(getState) {
  yield all([
    fork(newsSagas),
  ]);
}
