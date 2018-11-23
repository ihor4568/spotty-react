import Star from "@material-ui/icons/StarBorder";
import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  starsRating: {
    color: "gray",
    "&:hover": {
      color: "orange"
    }
  }
};

class StarsRating extends React.Component {
  static propTypes = {
    classes: PropTypes.string
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Star className={classes.starsRating} />
        <Star className={classes.starsRating} />
        <Star className={classes.starsRating} />
        <Star className={classes.starsRating} />
        <Star className={classes.starsRating} />
      </>
    );
  }
}
export default withStyles(styles, { withTheme: true })(StarsRating);
