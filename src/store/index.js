import { createStore, combineReducers } from "redux";

import shareViewReducer from "./reducers/shareView";

const rootReducer = combineReducers({
  share: shareViewReducer
});

export default createStore(rootReducer);
