import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import { GET_TOP1_CONTENT_LIST_REQUEST, GET_TOP1_CONTENT_LIST_SUCCESS, GET_TOP1_CONTENT_LIST_FAILURE } from '../types';

function getTopContentListApi(params) {
  return fetch(process.env.REACT_APP_DB_HOST + `/api/netflix/${params.nationCode}/top1`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function* getTopContentList(action) {
  try {
    // api 통신할때는 call
    const result = yield call(getTopContentListApi, action.params);
    // 아래와 같이 api 결과를 핸들링하여 dispatch 가능
    yield put({ type: GET_TOP1_CONTENT_LIST_SUCCESS, data: result });
  } catch (err) {
    console.log(err);
    yield put({ type: GET_TOP1_CONTENT_LIST_FAILURE, data: err.response.data });
  }
}

function* watchTopContentListApi() {
  yield takeLatest(GET_TOP1_CONTENT_LIST_REQUEST, getTopContentList);
}

export default function* topContentListSaga() {
  yield all([fork(watchTopContentListApi)]);
}
