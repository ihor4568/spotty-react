import { USER_FETCHED, USER_NOT_FOUND, SIGN_OUT } from "../actionTypes";

import { AuthService } from "../../services/AuthService";

export function signIn({ email, password }) {
  return dispatch => {
    AuthService.signIn(email, password).then(({ user }) => {
      dispatch({ type: USER_FETCHED, user });
    });
  };
}

export function signUp({ email, password, name }) {
  return dispatch => {
    AuthService.signUp(email, password, name).then(user => {
      dispatch({ type: USER_FETCHED, user });
    });
  };
}

export function signOut() {
  return dispatch => {
    AuthService.signOut().then(() => {
      dispatch({ type: SIGN_OUT });
    });
  };
}

export function fetchUser() {
  return dispatch => {
    AuthService.check()
      .then(user => {
        dispatch({ type: USER_FETCHED, user });
      })
      .catch(() => {
        dispatch({ type: USER_NOT_FOUND });
      });
  };
}
