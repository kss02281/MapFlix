import produce from "immer";
import * as type from '../types';

const initalState = {
  topContent: [],
  loading: false,
  error: null
};

const topContentList = (state = initalState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case type.GET_TOP1_CONTENT_LIST_REQUEST:
        draft.loading = true;
        break;

      // 요기가 saga에 의해 실행된다.
      case type.GET_TOP1_CONTENT_LIST_SUCCESS:
        draft.topContent = action.data;
        draft.loading = false;
        break;
      case type.GET_TOP1_CONTENT_LIST_FAILURE:
        draft.loading = false;
        draft.error = action.message;
        break;
      default:
        return state;
    }
  });

export default topContentList;