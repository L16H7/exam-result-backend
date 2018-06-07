import {
    FETCH_FINAL_RESULT
  } from '../constants/types';
  
  const INTIAL_STATE = {
    finalResult: []
  };
  
  export default function(state = INTIAL_STATE, action) {
    switch (action.type) {
      case FETCH_FINAL_RESULT:
        return action.payload.data;
    }
    return state;
  }