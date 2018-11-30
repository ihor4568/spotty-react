import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import mySongsTableReducer from "./reducers/mySongsTable";
import artistsReducer from "./reducers/artists";
import albumsReducer from "./reducers/albums";
import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
  songs: mySongsTableReducer,
  albums: albumsReducer,
  artists: artistsReducer,
  auth: authReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
