import {
  USER_FETCHED,
  USER_NOT_FOUND,
  SIGN_OUT,
  AUTH_ERROR,
  CLEAR_AUTH_ERROR
} from "../actionTypes";

import { AuthService } from "../../services/AuthService";

export function signIn({ email, password }) {
  return async dispatch => {
    try {
      const userInfo = await AuthService.signIn(email, password);
      dispatch({ type: USER_FETCHED, user: userInfo.user });
    } catch (e) {
      dispatch(authError(e.message));
    }
  };
}

export function signUp({ email, password, name }) {
  return async dispatch => {
    try {
      await AuthService.signUp(email, password, name);
      const user = await AuthService.check();
      dispatch({ type: USER_FETCHED, user });
    } catch (e) {
      dispatch(authError(e.message));
    }
  };
}

export function signOut() {
  return async dispatch => {
    await AuthService.signOut();
    dispatch({ type: SIGN_OUT });
  };
}

export function fetchUser() {
  return async dispatch => {
    try {
      const user = await AuthService.check();
      dispatch({ type: USER_FETCHED, user });
    } catch (e) {
      dispatch({ type: USER_NOT_FOUND });
    }
  };
}

export function authError(message) {
  return {
    type: AUTH_ERROR,
    error: message
  };
}

export function clearAuthError() {
  return {
    type: CLEAR_AUTH_ERROR
  };
}
