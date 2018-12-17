import * as actionCreators from "../userSongs";
import * as actionTypes from "../../actionTypes";
import { MusicService } from "../../../services/MusicService";

jest.mock("../../../services/FirebaseService");

describe("auth action creators", () => {
  describe("loadUserSongs action creator", () => {
    let dispatch;
    let loadUserSongs;
    let loadUserSongsParam;
    let userSongs;

    beforeEach(() => {
      userSongs = [
        {
          songId: "song1",
          name: "someonename"
        }
      ];
      dispatch = jest.fn();
      loadUserSongs = jest
        .spyOn(MusicService, "getUserSongs")
        .mockImplementation(() => Promise.resolve(userSongs));
      loadUserSongsParam = {
        userId: "user1"
      };
    });

    it("should return correct start action", () => {
      actionCreators.loadUserSongs(loadUserSongsParam)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.FETCH_USER_SONGS_START
      });
    });

    it("should return loadUserSongs success action if loadUserSongs completes successfully", async () => {
      const userId = loadUserSongsParam;

      await actionCreators.loadUserSongs(loadUserSongsParam)(dispatch);

      expect(loadUserSongs).toHaveBeenCalledWith(userId);
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.FETCH_USER_SONGS_SUCCESS,
        payload: userSongs,
        songs: userSongs
      });
    });

    it("should return correct Fail action if loadUserSongs service fails", async () => {
      loadUserSongs.mockImplementation(() =>
        Promise.reject({ message: "load user songs error" })
      );

      await actionCreators.loadUserSongs(loadUserSongsParam)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.FETCH_USER_SONGS_FAIL
      });
    });
  });

  describe("loadCachedUserSongs", () => {
    let userId = { userId: "user1" };
    it("should dispatch loadUserSongs", () => {
      const dispatchMock = jest.fn();
      const getStateMock = () => {
        return {
          userSongs: []
        };
      };
      actionCreators.loadCachedUserSongs(userId)(dispatchMock, getStateMock);
      expect(dispatchMock).toHaveBeenCalled();
    });

    it("should not dispatch loadUserSongs", () => {
      const dispatchMock = jest.fn();
      const getStateMock = () => {
        return {
          userSongs: [1]
        };
      };
      actionCreators.loadCachedUserSongs(userId)(dispatchMock, getStateMock);
      expect(dispatchMock).not.toHaveBeenCalled();
    });
  });

  describe("addUserSong action creator", () => {
    let dispatch;
    let setUserSong;
    let getUserSongs;
    let addUserSongParams;
    let userSongs;

    beforeEach(() => {
      userSongs = [
        {
          songId: "song1",
          name: "someonename"
        }
      ];
      dispatch = jest.fn();
      setUserSong = jest
        .spyOn(MusicService, "setUserSong")
        .mockImplementation(() => Promise.resolve());
      getUserSongs = jest
        .spyOn(MusicService, "getUserSongs")
        .mockImplementation(() => Promise.resolve(userSongs));
      addUserSongParams = {
        userId: "user1",
        songId: "song1"
      };
    });

    it("should return correct start action", () => {
      actionCreators.addUserSong(addUserSongParams)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.ADD_USER_SONG_START
      });
    });

    it("should return addUserSong success action if addUserSong completes successfully", async () => {
      await actionCreators.addUserSong(addUserSongParams)(dispatch);

      expect(setUserSong).toHaveBeenCalledWith(
        { songId: "song1", userId: "user1" },
        undefined
      );
      expect(getUserSongs).toHaveBeenCalledWith({ userId: "user1" });
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.ADD_USER_SONG_SUCCESS,
        payload: userSongs
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.SAVE_SONGS,
        savedSongs: userSongs
      });
    });

    it("should return correct Fail action if setUserSong service fails", async () => {
      setUserSong.mockImplementation(() =>
        Promise.reject({ message: "set user song error" })
      );

      await actionCreators.addUserSong(addUserSongParams)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.ADD_USER_SONG_FAIL
      });
    });

    it("should return correct Fail action if getUserSongs service fails", async () => {
      getUserSongs.mockImplementation(() =>
        Promise.reject({ message: "get user songs error" })
      );

      await actionCreators.addUserSong(addUserSongParams)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.ADD_USER_SONG_FAIL
      });
    });
  });

  describe("removeUserSong action creator", () => {
    let dispatch;
    let removeUserSong;
    let getUserSongs;
    let removeUserSongParams;
    let userSongs;

    beforeEach(() => {
      userSongs = [
        {
          songId: "song1",
          name: "someonename"
        }
      ];
      dispatch = jest.fn();
      removeUserSong = jest
        .spyOn(MusicService, "removeUserSong")
        .mockImplementation(() => Promise.resolve());
      getUserSongs = jest
        .spyOn(MusicService, "getUserSongs")
        .mockImplementation(() => Promise.resolve(userSongs));
      removeUserSongParams = {
        userId: "user1",
        songId: "song1"
      };
    });

    it("should return correct start action", () => {
      actionCreators.removeUserSong(removeUserSongParams)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.REMOVE_USER_SONG_START
      });
    });

    it("should return removeUserSong success action if removeUserSong completes successfully", async () => {
      await actionCreators.removeUserSong(removeUserSongParams)(dispatch);

      expect(removeUserSong).toHaveBeenCalledWith(
        { songId: "song1", userId: "user1" },
        undefined
      );
      expect(getUserSongs).toHaveBeenCalledWith({ userId: "user1" });
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.REMOVE_USER_SONG_SUCCESS,
        payload: userSongs
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.SAVE_SONGS,
        savedSongs: userSongs
      });
    });

    it("should return correct Fail action if removeUserSong service fails", async () => {
      removeUserSong.mockImplementation(() =>
        Promise.reject({ message: "remove user song error" })
      );

      await actionCreators.removeUserSong(removeUserSongParams)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.REMOVE_USER_SONG_FAIL
      });
    });

    it("should return correct Fail action if getUserSongs service fails", async () => {
      getUserSongs.mockImplementation(() =>
        Promise.reject({ message: "get user songs error" })
      );

      await actionCreators.removeUserSong(removeUserSongParams)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.REMOVE_USER_SONG_FAIL
      });
    });
  });
});
