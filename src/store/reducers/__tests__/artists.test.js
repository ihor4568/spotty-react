import artistsReducer, { INITIAL_STATE } from "../artists";

describe("albums reducer", () => {
  it("should return initial state at the beginning", () => {
    const res = artistsReducer(undefined, {});

    expect(res).toEqual(INITIAL_STATE);
  });
});
