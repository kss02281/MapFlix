import { createStore } from "redux";
//import Reducer from './reducer';
import rootReducer from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
