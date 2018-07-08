import {
    FETCH_FINAL_RESULT,
    FETCH_FINAL_RESULT_BY_ID,
    INSERT_FINAL_RESULT,
    UPDATE_FINAL_RESULT
  } from '../constants/types';
  
  const INTIAL_STATE = {
    finalResult: []
  };
  
  export default function(state = INTIAL_STATE, action) {
    switch (action.type) {
      case FETCH_FINAL_RESULT:
        return action.payload.data;
      case FETCH_FINAL_RESULT_BY_ID:
        return action.payload.data;
      case INSERT_FINAL_RESULT:
        return action.payload;
      case UPDATE_FINAL_RESULT:
        return action.payload;
        
    }
    return state;
  }