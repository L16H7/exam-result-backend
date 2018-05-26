import { combineReducers } from 'redux';
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";
import TimeTable from './timeTable';


const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  timeTable: TimeTable
});

export default rootReducer;
