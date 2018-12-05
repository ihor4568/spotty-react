import React from "react";
import { App } from "../App";
import renderer from "react-test-renderer";

jest.mock("../mySongsTable/MySongsTable", () => "my-songs");
jest.mock("../artists/Artists", () => "artists");
jest.mock("../about/About", () => "about");
jest.mock("../albums/Albums", () => "albums");
jest.mock("../albums/AlbumTable", () => "album-table");
jest.mock("../artists/ArtistTable", () => "artist-table");
jest.mock("../auth/Auth", () => "auth");
jest.mock("../notFound/NotFound", () => "not-found");

jest.mock("../routes/PrivateRoute", () => "private-route");
jest.mock("../routes/PublicRoute", () => "public-route");

jest.mock("../../services/FirebaseService");

describe("App component", () => {
  const props = {
    classes: {},
    loadArtists: jest.fn(),
    loadAlbums: jest.fn(),
    fetchUser: jest.fn()
  };

  it("should render correctly", () => {
    const tree = renderer.create(<App {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should load initial data after mount", () => {
    expect(props.fetchUser).toHaveBeenCalled();
  });
});
