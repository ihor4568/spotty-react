import { THEME_CHANGE_PALETTE_TYPE } from "../actionTypes";

const initialState = {
  type: "light"
};

export default function changeTheme(state = initialState, action) {
  switch (action.type) {
    case THEME_CHANGE_PALETTE_TYPE:
      return {
        type: action.payload
      };
    default:
      return state;
  }
}
