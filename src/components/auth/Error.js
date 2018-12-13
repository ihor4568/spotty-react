import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  error: {
    color: theme.palette.error.main,
    marginTop: "1.5rem"
  }
});

const Error = ({ text, classes }) => (
  <Typography className={classes.error} component="p">
    Error: {text}
  </Typography>
);

Error.propTypes = {
  text: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Error);
