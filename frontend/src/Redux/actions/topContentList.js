import * as type from '../types';


export const getTopContentList = params => ({
    type: type.GET_TOP1_CONTENT_LIST_REQUEST,
    /** 중요! - 이 params은 saga의
    const result = yield call(getUserTicketApi, action.params);
    여기의 params로 들어갑니다. */
    params
  });