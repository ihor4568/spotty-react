import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import mySongsTableReducer from "./reducers/mySongsTable";
import albumsReducer from "./reducers/albums";

const rootReducer = combineReducers({
  songs: mySongsTableReducer,
  albums: albumsReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
