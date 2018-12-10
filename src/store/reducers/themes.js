import * as actionTypes from "../actionTypes";

const initialState = {
  type: "light"
};

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER_THEME_SUCCESS:
      return {
        ...state,
        type: action.theme
      };
    case actionTypes.FETCH_USER_AND_THEME_SUCCESS:
      return {
        ...state,
        type: action.theme
      };
    case actionTypes.FETCH_USER_AND_THEME_FAIL:
      return {
        ...state,
        type: "light"
      };
    case actionTypes.SET_DEFAULT_THEME:
      return {
        ...state,
        type: "light"
      };
    default:
      return state;
  }
}
