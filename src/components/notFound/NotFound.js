import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const styles = {
  name: {
    color: "gray",
    textAlign: "center",
    paddingTop: "3rem"
  }
};

function NotFound({ classes }) {
  return (
    <Typography variant="h4" className={classes.name}>
      Not Found
    </Typography>
  );
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);
