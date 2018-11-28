import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import artistsReducer from "./reducers/artists";
import albumsReducer from "./reducers/albums";

const rootReducer = combineReducers({
  artists: artistsReducer,
  albums: albumsReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
