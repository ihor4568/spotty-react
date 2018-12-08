import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import artistsReducer from "./reducers/artists";
import albumsReducer from "./reducers/albums";
import authReducer from "./reducers/auth";
import themeReducer from "./reducers/themes";
import songsReducer from "./reducers/songs";
import userSongsReducer from "./reducers/user";
import playerReducer from "./reducers/player";

const rootReducer = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  player: playerReducer,
  auth: authReducer,
  songs: songsReducer,
  userSongs: userSongsReducer,
  theme: themeReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
