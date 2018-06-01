import { combineReducers } from 'redux';
import TimeTable from './timeTable';


const rootReducer = combineReducers({
  timeTable: TimeTable
});

export default rootReducer;
