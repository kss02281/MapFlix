import { all, fork, put, call, takeLatest } from "redux-saga/effects";
import {
  GET_CONTENT_SHOW_REQUEST,
  GET_CONTENT_SHOW_SUCCESS,
  GET_CONTENT_SHOW_FAILURE
} from "../types";

function getContentShowtApi(params) {
  return fetch(`/api/netflix/${params.nationCode}/${params.week}/top10`).then(response => {
    if(response.ok){
      return response.json()
    }
  })
}

function* getContentShow(action) {
  try {
    // api 통신할때는 call
    const result = yield call(getContentShowtApi, action.params);
    console.log('result saga',result)
    // 아래와 같이 api 결과를 핸들링하여 dispatch 가능
    yield put({ type: GET_CONTENT_SHOW_SUCCESS, data: result });
  } catch (err) {
    yield put({ type: GET_CONTENT_SHOW_FAILURE, data: err.response.data });
  }
}

function* watchContentShowApi() {
  yield takeLatest(GET_CONTENT_SHOW_REQUEST, getContentShow);
}

export default function* contentShowSaga() {
  yield all([fork(watchContentShowApi)]);
}
 