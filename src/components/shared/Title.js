import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  title: {
    padding: "1rem 0 1.5rem"
  }
});

function Title({ classes, name }) {
  return (
    <Typography variant="h4" className={classes.title}>
      {name}
    </Typography>
  );
}

Title.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

export default withStyles(styles)(Title);
