import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import artistsReducer from "./reducers/artists";

const rootReducer = combineReducers({
  artists: artistsReducer
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
