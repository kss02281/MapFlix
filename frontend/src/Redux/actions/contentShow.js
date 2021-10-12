import * as type from '../types';


export const getContentShow = params => ({
    type: type.GET_CONTENT_SHOW_REQUEST,
    /** 중요! - 이 params은 saga의
    const result = yield call(getUserTicketApi, action.params);
    여기의 params로 들어갑니다. */
    params
  });
  
  //export const setTicket = ticket => ({ type: SET_TICKET, ticket });
  