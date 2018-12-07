import * as actionTypes from "../actionTypes";
import { FirebaseService } from "../../services/FirebaseService";

export function startUpload() {
  return {
    type: actionTypes.DISABLE_SIGNUP_BUTTON
  };
}

export function uploadAvatarToStorage(filename) {
  return async dispatch => {
    try {
      dispatch({ type: actionTypes.UPLOAD_AVATAR_START });
      const image = await FirebaseService.storage()
        .ref("images/avatars")
        .child(filename)
        .getDownloadURL();
      dispatch(successUpload(image));
    } catch (e) {
      dispatch({ type: actionTypes.UPLOAD_AVATAR_FAIL });
    }
  };
}

export function successUpload(image) {
  return {
    type: actionTypes.UPLOAD_AVATAR_SUCCESS,
    image
  };
}
