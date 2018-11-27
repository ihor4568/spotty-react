import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  main: {
    width: "100%",
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
    children: PropTypes.object.isRequired
  };

  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.main}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Main);
