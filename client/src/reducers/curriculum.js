import {
  FETCH_LATEST_CURRICULUM_SUCCESS
} from '../constants/types';

const INITIAL_STATE = {
  curriculm: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LATEST_CURRICULUM_SUCCESS:
      return action.payload.data;
  }
  return state;
}