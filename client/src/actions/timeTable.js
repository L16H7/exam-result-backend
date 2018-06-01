import axios from 'axios';

import {
  FETCH_TIME_TABLE
} from '../constants/types';

export function getTimeTable(year) {
  const url = `http://localhost:3000/api/timetable/${year}/`;
  const request = axios.get(url);

  return {
    type: FETCH_TIME_TABLE,
    payload: request
  }
}