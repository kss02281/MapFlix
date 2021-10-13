import * as type from '../types';

const initialState = {
  year: '',
  week: '',
  date: ''
}

export default function yearWeek(state = initialState, action) {
  switch (action.type) {
    case type.SET_DATE:
      return {
        ...state,
        year: action.payload.year,
        week: action.payload.week,
        date: action.payload.date
      }
    default:
      return state
  }
}