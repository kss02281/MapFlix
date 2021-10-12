import { combineReducers } from 'redux';
import yearWeek from './yearWeek';

const rootReducer = combineReducers({
  yearWeek: yearWeek,
});

export default rootReducer;