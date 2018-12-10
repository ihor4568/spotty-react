import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import artistsReducer from "./reducers/artists";
import albumsReducer from "./reducers/albums";
import authReducer from "./reducers/auth";
import themeReducer from "./reducers/themes";
import songsReducer from "./reducers/songs";
import playerReducer from "./reducers/player";

const logger = createLogger({
  collapsed: true
});

const rootReducer = combineReducers({
  albums: albumsReducer,
  artists: artistsReducer,
  player: playerReducer,
  auth: authReducer,
  theme: themeReducer,
  songs: songsReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
