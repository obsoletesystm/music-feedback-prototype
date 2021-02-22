import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import orderDetails from "./modules/orderDetails";
import step from "./modules/step";
import username from "./modules/username";

const combinedReducers = combineReducers({
  orderDetails,
  step,
  username,
});

export default createStore(combinedReducers, applyMiddleware(thunk));
