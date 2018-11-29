import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import artistsReducer from "./reducers/artists";
import albumsReducer from "./reducers/albums";
import authReducer from "./reducers/auth";
import mySongsTableReducer from "./reducers/mySongsTable";

const rootReducer = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  auth: authReducer,
  songs: mySongsTableReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
