import produce from "immer";
import * as type from '../types';

const initalState = {
  genreScore: [],
  loading: false,
  error: null
};

const genreScore = (state = initalState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case type.GET_GENRE_SCORE_REQUEST:
        draft.loading = true;
        break;

      // 요기가 saga에 의해 실행된다.
      case type.GET_GENRE_SCORE_SUCCESS:
        draft.genreScore = action.data;
        draft.loading = false;
        break;
      case type.GET_GENRE_SCORE_FAILURE:
        draft.loading = false;
        draft.error = action.message;
        break;
      default:
        return state;
    }
  });

export default genreScore;