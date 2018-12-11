import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
  isLoggedIn: false,
  user: null,
  isLoaded: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_AND_THEME_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        isLoaded: true,
        error: ""
      };
    case actionTypes.SIGN_IN_SUCCESS:
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        isLoaded: true,
        error: ""
      };
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoaded: true
      };
    case actionTypes.FETCH_USER_AND_THEME_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isLoaded: true
      };
    case actionTypes.AUTH_ERROR:
      return {
        ...state,
        error: action.error
      };
    case actionTypes.CLEAR_AUTH_ERROR:
      return {
        ...state,
        error: ""
      };
    default:
      return state;
  }
};

export default authReducer;
