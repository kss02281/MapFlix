import { all, fork } from "redux-saga/effects";

import contentShowSaga from "./contentShowSaga";
import topContentListSaga from './topContentListSaga';

export default function* rootSaga() {
  yield all([fork(contentShowSaga)]);
  yield all([fork(topContentListSaga)]);
}
 