import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Albums from "../albums/Albums";

const styles = theme => ({
  main: {
    paddingBottom: "6.5rem"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    minHeight: `calc(100vh - (${theme.props.appBar.appBarHeight} + ${
      theme.props.mediaPlayer.mediaPlayerHeight
    }))`
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ...theme.mixins.toolbar
  }
});

class Main extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Albums />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Main);
