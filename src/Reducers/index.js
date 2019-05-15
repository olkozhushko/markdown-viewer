import {combineReducers} from "redux";
import putValueReducer from "./putValueReducer";

export default combineReducers({value: putValueReducer});