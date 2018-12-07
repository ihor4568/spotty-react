import * as actionTypes from "../actionTypes";

import { AuthService } from "../../services/AuthService";

export function signIn({ email, password }) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.USER_FETCH_START });
      const userInfo = await AuthService.signIn(email, password);
      dispatch({ type: actionTypes.USER_FETCH_SUCCESS, user: userInfo.user });
    } catch (e) {
      dispatch(authError(e.message));
    }
  };
}

export function signUp({ email, password, name, avatarURL }) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.USER_FETCH_START });
      await AuthService.signUp(email, password, name, avatarURL);
      const user = await AuthService.check();
      dispatch({ type: actionTypes.USER_FETCH_SUCCESS, user });
    } catch (e) {
      dispatch(authError(e.message));
    }
  };
}

export function signOut() {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.USER_FETCH_START });
      await AuthService.signOut();
      dispatch({ type: actionTypes.SIGN_OUT });
    } catch (e) {
      dispatch({ type: actionTypes.USER_FETCH_FAIL });
    }
  };
}

export function fetchUser() {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.USER_FETCH_START });
      const user = await AuthService.check();
      dispatch({ type: actionTypes.USER_FETCH_SUCCESS, user });
    } catch (e) {
      dispatch({ type: actionTypes.USER_FETCH_FAIL });
    }
  };
}

export function authError(message) {
  return {
    type: actionTypes.AUTH_ERROR,
    error: message
  };
}

export function clearAuthError() {
  return {
    type: actionTypes.CLEAR_AUTH_ERROR
  };
}
