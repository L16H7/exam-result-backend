import axios from 'axios';

import {
  FETCH_FINAL_RESULT
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