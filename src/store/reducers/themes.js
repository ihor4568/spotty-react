import * as actionTypes from "../actionTypes";

export const initialState = {
  themeType: "light"
};

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER_THEME_SUCCESS:
      return {
        themeType: action.themeType
      };
    case actionTypes.FETCH_USER_AND_THEME_SUCCESS:
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        themeType: action.themeType
      };
    case actionTypes.FETCH_USER_AND_THEME_FAIL:
    case actionTypes.SET_DEFAULT_THEME:
      return {
        themeType: initialState.themeType
      };
    default:
      return state;
  }
}
