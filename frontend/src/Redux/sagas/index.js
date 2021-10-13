import { all, fork } from "redux-saga/effects";

import contentShowSaga from "./contentShowSaga";

export default function* rootSaga() {
  yield all([fork(contentShowSaga)]);
}
 