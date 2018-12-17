import * as actionCreators from "../userSongs";
import * as actionTypes from "../../actionTypes";
import { MusicService } from "../../../services/MusicService";

jest.mock("../../../services/FirebaseService");

describe("userSongs action creators", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe("loadUserSongs action creator", () => {
    let dispatch;
    let loadUserSongs;
    let userId;
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
      userId = "user1";
    });

    it("should return correct start action", () => {
      actionCreators.loadUserSongs(userId)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.FETCH_USER_SONGS_START
      });
    });

    it("should return loadUserSongs success action if loadUserSongs completes successfully", async () => {
      await actionCreators.loadUserSongs(userId)(dispatch);

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

      await actionCreators.loadUserSongs(userId)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.FETCH_USER_SONGS_FAIL
      });
    });
  });

  describe("loadCachedUserSongs", () => {
    let userId = "user1";
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
    let userId;
    let songId;
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
      userId = "user1";
      songId = "song1";
    });

    it("should return correct start action", () => {
      actionCreators.addUserSong(userId, songId)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.ADD_USER_SONG_START
      });
    });

    it("should return addUserSong success action if addUserSong completes successfully", async () => {
      await actionCreators.addUserSong(userId, songId)(dispatch);

      expect(setUserSong).toHaveBeenCalledWith(userId, songId);
      expect(getUserSongs).toHaveBeenCalledWith(userId);

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

      await actionCreators.addUserSong(userId, songId)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.ADD_USER_SONG_FAIL
      });
    });

    it("should return correct Fail action if getUserSongs service fails", async () => {
      getUserSongs.mockImplementation(() =>
        Promise.reject({ message: "get user songs error" })
      );

      await actionCreators.addUserSong(userId, songId)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.ADD_USER_SONG_FAIL
      });
    });
  });

  describe("removeUserSong action creator", () => {
    let dispatch;
    let removeUserSong;
    let getUserSongs;
    let userId;
    let songId;
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
      userId = "user1";
      songId = "song1";
    });

    it("should return correct start action", () => {
      actionCreators.removeUserSong(userId, songId)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.REMOVE_USER_SONG_START
      });
    });

    it("should return removeUserSong success action if removeUserSong completes successfully", async () => {
      await actionCreators.removeUserSong(userId, songId)(dispatch);

      expect(removeUserSong).toHaveBeenCalledWith(userId, songId);
      expect(getUserSongs).toHaveBeenCalledWith(userId);

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

      await actionCreators.removeUserSong(userId, songId)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.REMOVE_USER_SONG_FAIL
      });
    });

    it("should return correct Fail action if getUserSongs service fails", async () => {
      getUserSongs.mockImplementation(() =>
        Promise.reject({ message: "get user songs error" })
      );

      await actionCreators.removeUserSong(userId, songId)(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actionTypes.REMOVE_USER_SONG_FAIL
      });
    });
  });
});
