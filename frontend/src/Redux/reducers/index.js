import { combineReducers } from 'redux';
import yearWeek from './yearWeek';
import contentShow from './contentShow';

const rootReducer = combineReducers({
  yearWeek: yearWeek,
  contentShow: contentShow
});

export default rootReducer;