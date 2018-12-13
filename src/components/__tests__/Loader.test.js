import React from "react";
import renderer from "react-test-renderer";
import Loader from "../shared/Loader";

describe("Loader component", () => {
  const props = {
    classes: {}
  };

  it("should render correctly", () => {
    const loader = renderer.create(<Loader {...props} />).toJSON();

    expect(loader).toMatchSnapshot();
  });
});
