import axios from 'axios';

import {
  FETCH_FINAL_RESULT
} from '../constants/types';

export function getTimeTable(year) {
  const url = `http://localhost:3000/api/finalResult/${year}/`;
  const request = axios.get(url);

  return {
    type: FETCH_TIME_TABLE,
    payload: request
  }
}