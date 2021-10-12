import * as type from '../types';


export function setDate(date) {
  return { 
    type: type.SET_DATE,
    payload: {
      year : date.year,
      week : date.week
    }
  }
}

