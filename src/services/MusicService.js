import { FirebaseService } from "./FirebaseService";

const database = FirebaseService.database();

export class MusicService {
  static getAllAlbums() {
    return database
      .ref("albums")
      .once("value")
      .then(albums => albums.val());
  }

  static getAllArtists() {
    return database
      .ref("artists")
      .once("value")
      .then(artists => artists.val());
  }

  static getArtistSongs(artistId) {
    return database
      .ref(`artists/${artistId}`)
      .once("value")
      .then(artist =>
        Promise.all(
          artist.val().songs.map(songId => MusicService.getSongById(songId))
        )
      );
  }

  static getAlbumSongs(albumId) {
    return database
      .ref(`albums/${albumId}`)
      .once("value")
      .then(album =>
        Promise.all(
          album.val().songs.map(songId => MusicService.getSongById(songId))
        )
      );
  }

  static getUserSongs(userId) {
    return database
      .ref(`users/${userId}/songs`)
      .once("value")
      .then(data => data.val() || [])
      .then(songs =>
        Promise.all(songs.map(songId => MusicService.getSongById(songId)))
      );
  }

  static setUserSong(userId, songId) {
    return database
      .ref(`users/${userId}/songs`)
      .once("value")
      .then(data => data.val() || [])
      .then(songs => {
        if (!songs.includes(songId)) {
          return database
            .ref(`users/${userId}/songs/${songs.length}`)
            .set(songId);
        }
        return Promise.reject();
      });
  }

  static removeUserSong(userId, songId) {
    return database
      .ref(`users/${userId}/songs`)
      .once("value")
      .then(data => data.val())
      .then(songs => {
        const filteredSongs = songs.filter(song => song !== songId);
        return database.ref(`users/${userId}/songs`).set(filteredSongs);
      });
  }

  static getSongById(songId) {
    return database
      .ref(`songs/${songId}`)
      .once("value")
      .then(song => song.val());
  }
}
