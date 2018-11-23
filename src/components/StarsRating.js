import Star from "@material-ui/icons/StarBorder";
import React from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  starsRaiting: {
    color: "gray",
    "&:hover": {
      color: "orange"
    }
  }
};

class StarsRaiting extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Star className={classes.starsRaiting} />
        <Star className={classes.starsRaiting} />
        <Star className={classes.starsRaiting} />
        <Star className={classes.starsRaiting} />
        <Star className={classes.starsRaiting} />
      </>
    );
  }
}
export default withStyles(styles, { withTheme: true })(StarsRaiting);
