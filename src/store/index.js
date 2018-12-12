import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import artistsReducer from "./reducers/artists";
import albumsReducer from "./reducers/albums";
import authReducer from "./reducers/auth";
import sharedSongReducer from "./reducers/shareView";
import themeReducer from "./reducers/themes";
import songsReducer from "./reducers/songs";
import userSongsReducer from "./reducers/userSongs";
import avatarReducer from "./reducers/avatar";
import playerReducer from "./reducers/player";
import searchReducer from "./reducers/search";
import ratingReducer from "./reducers/rating";
import loaderReducer from "./reducers/loader";

const logger = createLogger({
  collapsed: true
});

const rootReducer = combineReducers({
  avatar: avatarReducer,
  albums: albumsReducer,
  artists: artistsReducer,
  player: playerReducer,
  auth: authReducer,
  sharedSong: sharedSongReducer,
  theme: themeReducer,
  songs: songsReducer,
  userSongs: userSongsReducer,
  search: searchReducer,
  rating: ratingReducer,
  loader: loaderReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
