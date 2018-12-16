import faker from "faker";

import {
  data as expectedResult,
  snapshot,
  dbInstance
} from "../services/FirebaseService";

import { MusicService } from "../services/MusicService";

jest.mock("../services/FirebaseService");

const randomId = faker.random.uuid();

afterEach(() => {
  jest.clearAllMocks();
});

describe("Music Service", () => {
  describe("getAllAlbums", () => {
    it("should return an object with proper data", async () => {
      const expected = { name: "noname", songs: ["song"] };
      const result = await MusicService.getAllAlbums();
      expect(result).toEqual(expect.objectContaining(expected));
    });

    it("should call firebase function with proper arguments", async () => {
      await MusicService.getAllAlbums();
      expect(dbInstance.ref).toHaveBeenCalledWith("albums");
      expect(dbInstance.once).toHaveBeenCalledWith("value");
    });
  });

  describe("getSongById", () => {
    it("should return an object with proper data", async () => {
      const result = await MusicService.getSongById(randomId);
      expect(result).toEqual(expectedResult);
    });

    it("should call firebase function with proper arguments", async () => {
      await MusicService.getSongById(randomId);
      expect(dbInstance.ref).toHaveBeenCalledWith(`songs/${randomId}`);
      expect(dbInstance.once).toHaveBeenCalledWith("value");
    });
  });

  describe("getAllArtists", () => {
    it("should return an object with proper data", async () => {
      const expected = { name: "noname", songs: ["song"] };
      const result = await MusicService.getAllArtists();
      expect(result).toEqual(expect.objectContaining(expected));
    });

    it("should call firebase function with proper arguments", async () => {
      await MusicService.getAllArtists();
      expect(dbInstance.ref).toHaveBeenCalledWith("artists");
      expect(dbInstance.once).toHaveBeenCalledWith("value");
    });
  });

  describe("getArtistSongs", () => {
    it("should return an array with proper data", async () => {
      const expected = [expectedResult];
      const result = await MusicService.getArtistSongs(randomId);
      expect(result).toEqual(expect.arrayContaining(expected));
    });

    it("should call firebase function with proper arguments", async () => {
      await MusicService.getArtistSongs(randomId);
      expect(dbInstance.ref).toHaveBeenCalledWith(`artists/${randomId}`);
      expect(dbInstance.once).toHaveBeenCalledWith("value");
    });
  });

  describe("getAlbumSongs", () => {
    it("should return an array with proper data", async () => {
      const expected = [expectedResult];
      const result = await MusicService.getAlbumSongs(randomId);
      expect(result).toEqual(expect.arrayContaining(expected));
    });

    it("should call firebase function with proper arguments", async () => {
      await MusicService.getAlbumSongs(randomId);
      expect(dbInstance.ref).toHaveBeenCalledWith(`albums/${randomId}`);
      expect(dbInstance.once).toHaveBeenCalledWith("value");
    });
  });

  describe("getUserSongs", () => {
    const returnValue = ["song1"];
    const prev = snapshot.val;

    afterAll(() => {
      snapshot.val = prev;
    });

    it("should return an array with proper data", async () => {
      snapshot.val = () => returnValue;
      const expected = [returnValue];
      const result = await MusicService.getUserSongs(randomId);
      expect(result).toEqual(expect.arrayContaining(expected));
    });

    it("should return empty array if there is no data", async () => {
      snapshot.val = () => null;
      const result = await MusicService.getUserSongs(randomId);
      expect(result).toEqual([]);
    });

    it("should call firebase function with proper arguments", async () => {
      snapshot.val = () => returnValue;
      await MusicService.getUserSongs(randomId);
      expect(dbInstance.ref).toHaveBeenCalledWith(`users/${randomId}/songs`);
      expect(dbInstance.once).toHaveBeenCalledWith("value");
    });
  });

  describe("setUserSong", () => {
    const returnValue = ["song1", "song2"];
    const prev = snapshot.val;

    afterAll(() => {
      snapshot.val = prev;
    });

    it("should call firebase function with proper arguments", async () => {
      snapshot.val = () => returnValue;
      await MusicService.setUserSong(randomId, "song3");
      expect(dbInstance.ref).toHaveBeenCalledWith(`users/${randomId}/songs`);
      expect(dbInstance.once).toHaveBeenCalledWith("value");
    });

    it("should call firebase function with proper arguments if there is no given song as the argument yet", async () => {
      snapshot.val = () => returnValue;
      await MusicService.setUserSong(randomId, "song3");
      expect(dbInstance.ref).toHaveBeenCalledWith(`users/${randomId}/songs/2`);
      expect(dbInstance.set).toHaveBeenCalledWith("song3");
    });

    it("should call firebase function with proper arguments if once function's promise returns null", async () => {
      snapshot.val = () => null;
      await MusicService.setUserSong(randomId, "song1");
      expect(dbInstance.ref).toHaveBeenCalledWith(`users/${randomId}/songs/0`);
      expect(dbInstance.set).toHaveBeenCalledWith("song1");
    });
  });

  describe("removeUserSong", () => {
    it("should call firebase function with proper arguments", async () => {
      const prev = snapshot.val;
      snapshot.val = () => ["song1", "song2"];
      await MusicService.removeUserSong(randomId, "song1");
      expect(dbInstance.ref).toHaveBeenCalledWith(`users/${randomId}/songs`);
      expect(dbInstance.once).toHaveBeenCalledWith("value");
      expect(dbInstance.set).toHaveBeenCalledWith(["song2"]);
      snapshot.val = prev;
    });
  });
});
