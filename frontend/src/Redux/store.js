import { createStore, applyMiddleware, compose } from 'redux';
//import Reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index.js';
import rootSaga from './sagas/index';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
  )(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;