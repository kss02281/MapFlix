import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import {
  GET_GENRE_SCORE_REQUEST,
  GET_GENRE_SCORE_SUCCESS,
  GET_GENRE_SCORE_FAILURE
} from "../types";

function getGenreScoreApi(params) {
  return fetch(`/netflix/${params.nationCode}/${params.week}/genres`).then(response => {
    if(response.ok){
      return response.json()
    }
  })
}

function* getGenreScore(action) {
  try {
    // api 통신할때는 call
    const result = yield call(getGenreScoreApi, action.params);
    console.log('result saga',result)
    // 아래와 같이 api 결과를 핸들링하여 dispatch 가능
    yield put({ type: GET_GENRE_SCORE_SUCCESS, data: result });
  } catch (err) {
    yield put({ type: GET_GENRE_SCORE_FAILURE, data: err.response.data });
  }
}

function* watchGenreScoreApi() {
  yield takeLatest(GET_GENRE_SCORE_REQUEST, getGenreScore);
}

export default function* contentShowSaga() {
  yield all([fork(watchGenreScoreApi)]);
}
