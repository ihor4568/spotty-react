import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import albumsReducer from "./reducers/albums";

const rootReducer = combineReducers({
  albums: albumsReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
