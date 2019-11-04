import { combineReducers } from "redux";
import todo from "./todo.reducer";
import filter from "./filter.reducer";
export default combineReducers({ todo, filter});
