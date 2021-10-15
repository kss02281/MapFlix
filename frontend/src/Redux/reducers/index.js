import { combineReducers } from 'redux';
import yearWeek from './yearWeek';
import contentShow from './contentShow';
import topContentList from './topContentList';

const rootReducer = combineReducers({
  yearWeek: yearWeek,
  contentShow: contentShow,
  topContentList: topContentList,
});

export default rootReducer;