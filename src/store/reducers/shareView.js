import { ADD_SONG } from "../actionTypes";

const initialState = {
  imageUrl:
    "http://1.bp.blogspot.com/-gJPfokcNytE/Uy0KljKYg8I/AAAAAAAAAKk/8UhzMrqWjbg/s1600/397803_10151392708761987_1614138446_n.jpg",
  songName: "The Eminem Song",
  artistName: "Eminemlol"
};

export default function shareViewReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SONG:
      return action.payload;
    default:
      return state;
  }
}
