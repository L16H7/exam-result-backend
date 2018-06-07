import axios from 'axios';

import {
  FETCH_FINAL_RESULT
} from '../constants/types';

export function getFinalResult(academicYear) {
  const url = `http://localhost:3000/api/finalResults/${academicYear}/`;
  const request = axios.get(url);

  return {
    type: FETCH_FINAL_RESULT,
    payload: request
  }
}