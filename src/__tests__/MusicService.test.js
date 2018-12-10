import faker from "faker";

import {
  data as expectedResult,
  FirebaseService
} from "../services/FirebaseService";

import { MusicService } from "../services/MusicService";

jest.mock("../services/FirebaseService");

const database = FirebaseService.database();
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
      expect(database.ref).toHaveBeenCalledWith("albums");
      expect(database.once).toHaveBeenCalledWith("value");
    });
  });

  describe("getSong", () => {
    it("should return an object with proper data", async () => {
      const result = await MusicService.getSong(randomId);
      expect(result).toEqual(expectedResult);
    });

    it("should call firebase function with proper arguments", async () => {
      await MusicService.getSong(randomId);
      expect(database.ref).toHaveBeenCalledWith(`songs/${randomId}`);
      expect(database.once).toHaveBeenCalledWith("value");
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
      expect(database.ref).toHaveBeenCalledWith("artists");
      expect(database.once).toHaveBeenCalledWith("value");
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
      expect(database.ref).toHaveBeenCalledWith(`artists/${randomId}`);
      expect(database.once).toHaveBeenCalledWith("value");
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
      expect(database.ref).toHaveBeenCalledWith(`albums/${randomId}`);
      expect(database.once).toHaveBeenCalledWith("value");
    });
  });
});
