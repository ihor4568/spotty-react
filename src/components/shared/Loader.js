import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  progress: {
    color: theme.palette.primary.main
  },
  progressContainer: {
    width: "10rem",
    height: "10rem",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
});

function Loader(props) {
  const { classes } = props;
  return (
    <div className={classes.progressContainer}>
      <CircularProgress size={160} className={classes.progress} />
    </div>
  );
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Loader);
