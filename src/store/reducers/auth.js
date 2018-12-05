import * as ationTypes from "../actionTypes";

const INITIAL_STATE = {
  isLoggedIn: false,
  user: null,
  isLoaded: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ationTypes.USER_FETCHED_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        isLoaded: true,
        error: ""
      };
    case ationTypes.USER_FETCHED_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isLoaded: true
      };
    case ationTypes.SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoaded: true
      };
    case ationTypes.AUTH_ERROR:
      return {
        ...state,
        error: action.error
      };
    case ationTypes.CLEAR_AUTH_ERROR:
      return {
        ...state,
        error: ""
      };
    default:
      return state;
  }
};

export default authReducer;
