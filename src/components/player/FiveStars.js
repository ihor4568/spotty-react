import Star from "@material-ui/icons/StarBorder";
import React from "react";
import { withStyles } from "@material-ui/core";

const styles = {
  fiveStars: {
    color: "gray",
    "&:hover": {
      color: "orange"
    }
  }
};

class FiveStars extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Star className={classes.fiveStars} />
        <Star className={classes.fiveStars} />
        <Star className={classes.fiveStars} />
        <Star className={classes.fiveStars} />
        <Star className={classes.fiveStars} />
      </>
    );
  }
}
export default withStyles(styles, { withTheme: true })(FiveStars);
