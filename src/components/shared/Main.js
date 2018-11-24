import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Albums from "../albums/Albums";
import Artists from "../artists/Artists";

const styles = theme => ({
  main: {
    paddingBottom: "6.5rem"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
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
    classes: PropTypes.object.isRequired,
    currentPage: PropTypes.string.isRequired
  };

  render() {
    const { classes } = this.props;
    const { currentPage } = this.props;
    return (
      <div className={classes.main}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {currentPage === "albums" && <Albums />}
          {currentPage === "artists" && <Artists />}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Main);
