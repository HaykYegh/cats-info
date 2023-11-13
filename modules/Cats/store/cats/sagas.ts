import { takeLatest, call, put } from 'redux-saga/effects';
import {getCats} from "@/modules/Cats/store/cats/actions";
import {getCatsData} from "@/services/catsApiService";
import {addCatsData, setCatsData, setLoading} from "@/modules/Cats/store/cats/slice";

function* fetchCatsSaga(action: ReturnType<typeof getCats>) {
  try {
    yield put(setLoading(true))
    const {payload} = action
    const {data} = yield call(getCatsData, {...payload, limit: 10, page: payload?.page ?? 1});
    yield put(payload?.page && payload?.page > 1 ? addCatsData(data) : setCatsData(data));
  } catch (e) {
    console.log("e ->", e)
  } finally {
    yield put(setLoading(false))
  }
}

export default function* watchCatsSaga() {
  yield takeLatest(getCats.type, fetchCatsSaga);
}