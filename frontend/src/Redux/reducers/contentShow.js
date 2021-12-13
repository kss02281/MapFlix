import produce from "immer";
import * as type from '../types';

const initalState = {
  content: [],
  loading: false,
  error: null
};

const contentShow = (state = initalState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case type.GET_CONTENT_SHOW_REQUEST:
        draft.loading = true;
        break;

      // 요기가 saga에 의해 실행된다.
      case type.GET_CONTENT_SHOW_SUCCESS:
        draft.content = action.data;
        draft.loading = false;
        break;
      case type.GET_CONTENT_SHOW_FAILURE:
        draft.loading = false;
        draft.error = action.message;
        break;
      default:
        return state;
    }
  });

export default contentShow;