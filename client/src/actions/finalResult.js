import axios from 'axios';

import {
  FETCH_FINAL_RESULT,
  FETCH_FINAL_RESULT_BY_ID,
  INSERT_FINAL_RESULT,
  UPDATE_FINAL_RESULT
} from '../constants/types';

export function getFinalResult(name,rollNo,eduYear,academicYear) {
  if(name==''){
    name='@';
  }
  if(rollNo==''){
    rollNo='@';
  }
  if(eduYear==''){
    eduYear='@';
  }
  if(academicYear==''){
    academicYear='@';
  }
  const url = `http://localhost:3000/api/finalResults/filter/${name}/${rollNo}/${eduYear}/${academicYear}/`;
  const request = axios.get(url);

  return {
    type: FETCH_FINAL_RESULT,
    payload: request
  }
}
export function getFinalResultById(id) {

  const url = `http://localhost:3000/api/finalResults/${id}/`;
  const request = axios.get(url);

  return {
    type: FETCH_FINAL_RESULT_BY_ID,
    payload: request
  }
}
export function insertFinalResult(result) {
  const url = `http://localhost:3000/api/finalResults/insert/`;
  const request = axios.post(url, result);

  return {
    type: INSERT_FINAL_RESULT,
    payload: request
  }
}
export function updateFinalResult(id,result) {
  const url = `http://localhost:3000/api/finalResults/update/${id}`;
  const request = axios.put(url, result);

  return {
    type: UPDATE_FINAL_RESULT,
    payload: request
  }
}