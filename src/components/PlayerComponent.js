import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  player: {
    backgroundColor: "#2196f3",
    color: "inherit",
    width: "100%",
    height: 100,
    position: "fixed",
    bottom: 0,
    zIndex: theme.zIndex.drawer + 1
  }
});

class Player extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.player} />;
  }
}

Player.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Player);
