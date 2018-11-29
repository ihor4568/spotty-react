import { USER_FETCHED, USER_NOT_FOUND, SIGN_OUT } from "../actionTypes";

const INITIAL_STATE = {
  isLoggedIn: false,
  user: null,
  isLoaded: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_FETCHED:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        isLoaded: true
      };
    case USER_NOT_FOUND:
      return {
        ...state,
        isLoggedIn: false,
        isLoaded: true
      };
    case SIGN_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoaded: true
      };
    default:
      return state;
  }
};

export default authReducer;
