import * as actionTypes from "../actionTypes";

const INITIAL_STATE = {
  avatarURL: "",
  canSubmit: true
};

const avatarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.DISABLE_SIGNUP_BUTTON:
      return {
        ...state,
        canSubmit: false,
        avatarURL: ""
      };
    case actionTypes.UPLOAD_AVATAR_SUCCESS:
      return {
        ...state,
        canSubmit: true,
        avatarURL: action.image
      };
    default: {
      return state;
    }
  }
};

export default avatarReducer;
