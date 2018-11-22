import React from "react";

import { withStyles } from "@material-ui/core/styles";

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

class Player extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.player} />;
  }
}

export default withStyles(styles, { withTheme: true })(Player);
