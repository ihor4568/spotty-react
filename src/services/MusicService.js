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

  static getArtistsSongs(artistId) {
    return database
      .ref(`artists/${artistId}`)
      .once("value")
      .then(artist =>
        Promise.all(
          artist.val().songs.map(songId =>
            database
              .ref(`songs/${songId}`)
              .once("value")
              .then(song => song.val())
          )
        )
      );
  }

  static getAlbumsSongs(albumId) {
    return database
      .ref(`albums/${albumId}`)
      .once("value")
      .then(album =>
        Promise.all(
          album.val().songs.map(songId =>
            database
              .ref(`songs/${songId}`)
              .once("value")
              .then(song => song.val())
          )
        )
      );
  }
}
