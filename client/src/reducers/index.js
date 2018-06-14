import { combineReducers } from 'redux';
import TimeTable from './timeTable';
import Curriculum from './curriculum';


const rootReducer = combineReducers({
  timeTable: TimeTable,
  curriculum: Curriculum
});

export default rootReducer;
