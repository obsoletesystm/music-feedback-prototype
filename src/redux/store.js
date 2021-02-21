import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import username from "./modules/username";
import orderDetails from "./modules/orderDetails";

const combinedReducers = combineReducers({
  username,
  orderDetails,
});

export default createStore(combinedReducers, applyMiddleware(thunk));
