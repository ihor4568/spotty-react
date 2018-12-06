import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import artistsReducer from "./reducers/artists";
import albumsReducer from "./reducers/albums";
import authReducer from "./reducers/auth";
import songsReducer from "./reducers/songs";
import userSongsReducer from "./reducers/user";

const rootReducer = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  auth: authReducer,
  songs: songsReducer,
  userSongs: userSongsReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
