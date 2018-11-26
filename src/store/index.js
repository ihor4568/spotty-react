import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import mySongsTableReducer from "./reducers/mySongsTable";

const rootReducer = combineReducers({
  songs: mySongsTableReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
