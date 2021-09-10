import { combineReducers } from "redux";
import prediosReducer from "./prediosReducer";

export default combineReducers ({
    predios: prediosReducer
});