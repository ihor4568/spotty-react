import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
