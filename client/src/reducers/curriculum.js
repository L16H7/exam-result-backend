import {
  FETCH_LATEST_CURRICULUM_SUCCESS,
  FETCH_CURRICULUM_BY_ID,
  UPDATE_CURRICULUM_BY_ID
} from '../constants/types';

const INITIAL_STATE = {
  curriculum: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LATEST_CURRICULUM_SUCCESS:
      return action.payload.data;
    case FETCH_CURRICULUM_BY_ID:
      return action.payload.data;
    case UPDATE_CURRICULUM_BY_ID:
      return state;
  }
  return state;
}