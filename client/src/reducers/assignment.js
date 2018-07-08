import {
    FETCH_LATEST_ASSIGNMENT_SUCCESS,
    FETCH_ASSIGNMENT_BY_ID,
    UPDATE_ASSIGNMENT_BY_ID,
    INSERT_ASSIGNMENT
  } from '../constants/types';
  
  const INITIAL_STATE = {
    assignment: []
  };
  
  export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
      case FETCH_LATEST_ASSIGNMENT_SUCCESS:
        return action.payload.data;
      case FETCH_ASSIGNMENT_BY_ID:
        return action.payload.data;
      case UPDATE_ASSIGNMENT_BY_ID:
        return state;
      case INSERT_ASSIGNMENT:
        return action.payload;
    }
    return state;
  }