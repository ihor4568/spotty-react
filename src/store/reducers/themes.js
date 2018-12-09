import * as actionTypes from "../actionTypes";

const initialState = {
  type: "light"
};

export default function changeTheme(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER_THEME_SUCCESS:
      return {
        ...state,
        type: action.payload
      };
    case actionTypes.FETCH_USER_THEME_SUCCESS:
      return {
        ...state,
        type: action.payload
      };
    default:
      return state;
  }
}
