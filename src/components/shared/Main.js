import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import About from "../about/About";
import Albums from "../albums/Albums";

const styles = theme => ({
  main: {
    paddingBottom: "6.5rem"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100%",
    maxWidth: "80rem",
    overflow: "hidden",
    boxSizing: "border - box",
    margin: "0 auto"
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
    itemMount: PropTypes.string.isRequired
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.itemMount === "About" ? <About /> : null}
          {this.props.itemMount === "Albums" ? <Albums /> : null}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Main);
