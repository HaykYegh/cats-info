import {all, fork} from 'redux-saga/effects';
import watchCatsSaga from "@/modules/Cats/store/cats/sagas";

export default function* rootSaga() {
  yield all([
    fork(watchCatsSaga),
  ]);
}