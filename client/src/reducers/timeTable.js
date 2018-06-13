import {
  FETCH_TIME_TABLE,
  UPDATE_PERIOD_SUCCESS
} from '../constants/types';

const INTIAL_STATE = {
  timeTable: []
};

export default function(state = INTIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TIME_TABLE:
      return action.payload.data;
    case UPDATE_PERIOD_SUCCESS:
      return state;
  }
  return state;
}