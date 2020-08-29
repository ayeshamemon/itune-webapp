import { call, put, takeLatest } from "redux-saga/effects";
import Types from "./actionTypes";
import { searchService } from "../services";


// worker Saga: will be fired on Search actions
function* fetchSearchResults(action) {
    try {
        const songs = yield call(searchService, action.payload.searchText);
        // console;
        yield put({ type: Types.SEARCH_SUCCEEDED, songs });
    } catch (e) {
        console.log(e);
        yield put({ type: Types.SEARCH_FAILED, songs: [] });
    }
}

/*
  takeLatest.

  while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* searchSaga() {
    yield takeLatest(Types.SEARCH_REQUESTED, fetchSearchResults);
}

export default searchSaga;
