import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import albumsReducer from "./reducers/albums";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  albums: albumsReducer,
  auth: authReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
