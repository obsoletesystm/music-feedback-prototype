import { createStore, combineReducers } from "redux";
import username from "./modules/username";

const combinedReducers = combineReducers({
    username,
});

export default createStore(combinedReducers);