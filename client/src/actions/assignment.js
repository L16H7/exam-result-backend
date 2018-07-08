import axios from 'axios';

import {
  FETCH_LATEST_ASSIGNMENT_SUCCESS,
  FETCH_ASSIGNMENT_BY_ID,
  UPDATE_ASSIGNMENT_BY_ID,
  INSERT_ASSIGNMENT
} from '../constants/types';

import {
  API_ENDPOINT
} from '../constants/config';

const baseUrl = API_ENDPOINT + 'assignment';

export function getLatestAssignment(year) {
  const url = `${baseUrl}/latest/${year}`;
  const request = axios.get(url);

  return {
    type: FETCH_LATEST_ASSIGNMENT_SUCCESS,
    payload: request
  };
}

export function getAssignmentById(id) {
  const url = `${baseUrl}/${id}`;
  const request = axios.get(url);

  return {
    type: FETCH_ASSIGNMENT_BY_ID,
    payload: request
  };
}

export function updateAssignmentById(id, newAssignment) {
  const url = `${baseUrl}/${id}`;
  const request = axios.put(url, newAssignment);

  return {
    type: UPDATE_ASSIGNMENT_BY_ID,
    payload: request
  }
}

  export function insertAssignment(assignment) {
    const url = `${baseUrl}/insert/`;
    const request = axios.post(url, assignment);
  
    return {
      type: INSERT_ASSIGNMENT,
      payload: request
    }
  }