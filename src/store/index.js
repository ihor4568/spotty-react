import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import artistsReducer from "./reducers/artists";
import albumsReducer from "./reducers/albums";
import authReducer from "./reducers/auth";
import songsReducer from "./reducers/songs";

const rootReducer = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  auth: authReducer,
  songs: songsReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
