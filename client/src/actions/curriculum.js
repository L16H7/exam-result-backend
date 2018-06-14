import axios from 'axios';

import {
  FETCH_LATEST_CURRICULUM_SUCCESS
} from '../constants/types';

import {
  API_ENDPOINT
} from '../constants/config';

const baseUrl = API_ENDPOINT + 'curriculum';

export function getLatestCurriculum() {
  const url = `${baseUrl}/latest`;
  const request = axios.get(url);

  return {
    type: FETCH_LATEST_CURRICULUM_SUCCESS,
    payload: request
  };
}