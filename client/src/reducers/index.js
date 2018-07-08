import { combineReducers } from 'redux';
import TimeTable from './timeTable';
import Curriculum from './curriculum';
import FinalResult from './finalResult';
import Assignment from './assignment';


const rootReducer = combineReducers({
  timeTable: TimeTable,
  curriculum: Curriculum,
  assignment:Assignment,
  finalResult:FinalResult
});

export default rootReducer;
