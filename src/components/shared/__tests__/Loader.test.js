import React from "react";
import renderer from "react-test-renderer";
import Loader from "../Loader";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { lightTheme } from "../../../themes";

jest.mock("@material-ui/core/CircularProgress", () => "circular-progress");

describe("Loader component", () => {
  it("should render correctly", () => {
    const loader = renderer
      .create(
        <MuiThemeProvider theme={lightTheme}>
          <Loader />
        </MuiThemeProvider>
      )
      .toJSON();

    expect(loader).toMatchSnapshot();
  });
});
