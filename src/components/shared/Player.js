import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  player: {
    backgroundColor: theme.palette.primary.main,
    color: "inherit",
    width: "100%",
    height: "6.5rem",
    position: "fixed",
    bottom: 0,
    zIndex: theme.zIndex.drawer + 1
  }
});

class Player extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { classes } = this.props;

    return <div className={classes.player} />;
  }
}

export default withStyles(styles, { withTheme: true })(Player);
