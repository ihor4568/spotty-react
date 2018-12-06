import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import artistsReducer from "./reducers/artists";
import albumsReducer from "./reducers/albums";
import authReducer from "./reducers/auth";
import shareViewReducer from "./reducers/shareView";
import songsReducer from "./reducers/songs";
import playerReducer from "./reducers/player";

const rootReducer = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  player: playerReducer,
  auth: authReducer,
  shareView: shareViewReducer,
  songs: songsReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
