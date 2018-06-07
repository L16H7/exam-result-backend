import {
    FETCH_FINAL_RESULT
  } from '../constants/types';
  
  const INTIAL_STATE = {
    timeTable: []
  };
  
  export default function(state = INTIAL_STATE, action) {
    switch (action.type) {
      case FETCH_TIME_TABLE:
        return action.payload.data;
    }
    return state;
  }