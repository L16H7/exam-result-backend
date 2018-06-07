import { combineReducers } from 'redux';
import TimeTable from './timeTable';
import FinalResult from './finalResult';


const rootReducer = combineReducers({
  timeTable: TimeTable,
  finalResult:FinalResult

});

export default rootReducer;
