import { combineReducers } from 'redux';
import yearWeek from './yearWeek';
import contentShow from './contentShow';
import topContentList from './topContentList';
import genreScore from './genreScore';

const rootReducer = combineReducers({
  yearWeek: yearWeek,
  contentShow: contentShow,
  topContentList: topContentList,
  genreScore: genreScore
});

export default rootReducer;