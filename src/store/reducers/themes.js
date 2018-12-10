import * as actionTypes from "../actionTypes";

const initialState = {
  themeType: "light"
};

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER_THEME_SUCCESS:
      return {
        ...state,
        themeType: action.themeType
      };
    case actionTypes.FETCH_USER_AND_THEME_SUCCESS:
      return {
        ...state,
        themeType: action.themeType
      };
    case actionTypes.FETCH_USER_AND_THEME_FAIL:
      return {
        ...state,
        themeType: "light"
      };
    case actionTypes.SET_DEFAULT_THEME:
      return {
        ...state,
        themeType: "light"
      };
    default:
      return state;
  }
}
