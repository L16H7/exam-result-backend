import axios from 'axios';

import {
  FETCH_TIME_TABLE,
  UPDATE_PERIOD_SUCCESS
} from '../constants/types';

const baseUrl = 'http://localhost:3000/api/timetable';

export function getTimeTable(year) {
  const url = `${baseUrl}/${year}/`;
  const request = axios.get(url);

  return {
    type: FETCH_TIME_TABLE,
    payload: request
  };
};

export function updatePeriodSubject(id, period, subject) {
  const url = `${baseUrl}/${id}/${period}/${subject}`;
  const request = axios.put(url);

  return {
    type: UPDATE_PERIOD_SUCCESS,
    payload: request
  };
};
