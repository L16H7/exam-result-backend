import axios from 'axios';

import {
  FETCH_LATEST_CURRICULUM_SUCCESS,
  FETCH_CURRICULUM_BY_ID,
  UPDATE_CURRICULUM_BY_ID
} from '../constants/types';

import {
  API_ENDPOINT
} from '../constants/config';

const baseUrl = API_ENDPOINT + 'curriculum';

export function getLatestCurriculum(year) {
  const url = `${baseUrl}/latest/${year}`;
  const request = axios.get(url);

  return {
    type: FETCH_LATEST_CURRICULUM_SUCCESS,
    payload: request
  };
}

export function getCurriculumById(id) {
  const url = `${baseUrl}/${id}`;
  const request = axios.get(url);

  return {
    type: FETCH_CURRICULUM_BY_ID,
    payload: request
  };
}

export function updateCurriculumById(id, newCurriculum) {
  const url = `${baseUrl}/${id}`;
  const request = axios.put(url, newCurriculum);

  return {
    type: UPDATE_CURRICULUM_BY_ID,
    payload: request
  }
}