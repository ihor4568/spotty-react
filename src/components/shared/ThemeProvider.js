import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { lightTheme, darkTheme } from "../../themes";

const ThemeProvider = ({ type, children }) => (
  <MuiThemeProvider theme={type === "dark" ? darkTheme : lightTheme}>
    {children}
  </MuiThemeProvider>
);

ThemeProvider.propTypes = {
  type: PropTypes.oneOf(["light", "dark"]).isRequired,
  children: PropTypes.element.isRequired
};

ThemeProvider.defaultProps = {
  type: "light"
};

const mapStateToProps = state => ({
  type: state.theme.type
});

export default connect(mapStateToProps)(ThemeProvider);
