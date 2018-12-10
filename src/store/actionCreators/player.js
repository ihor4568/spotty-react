import * as actionTypes from "../actionTypes";

export function playSong(songs, id) {
  return {
    type: actionTypes.PLAY_SONG,
    song: songs[id]
  };
}

export function pauseSong(songs, id) {
  return {
    type: actionTypes.PAUSE_SONG,
    songs,
    song: songs[id],
    id
  };
}

// export function previousSong(songs, id) {
//   return {
//     type: actionTypes.PREVIOUS_SONG,
//     songs,
//     song: songs[id - 1],
//     id
//   };
// }

// export function nextSong(songs, id) {
//   return {
//     type: actionTypes.NEXT_SONG,
//     songs,
//     song: songs[id + 1],
//     id
//   };
// }
