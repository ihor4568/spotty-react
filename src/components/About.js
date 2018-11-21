import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AboutCard from "./AboutCard";
import Grid from "@material-ui/core/Grid";

const styles = () => ({
  title: {
    paddingBottom: "1.5rem"
  },
  container: {
    height: "100%",
    maxWidth: "80rem",
    overflow: "hidden",
    boxSizing: "border - box",
    margin: "0 auto",
    padding: "2rem"
  },
  developed: {
    padding: "1rem 0 3rem 0"
  }
});

class About extends Component {
  render() {
    const { classes } = this.props;
    const team = [
      "WOLFRIEND",
      "lubovgribiniyk",
      "yevheniiIvanise",
      "pavelbaranchuk",
      "gamesminer",
      "IYeskov",
      "kozak-iz-kh",
      "OlegShynkarenko"
    ];
    return (
      <div className={classes.container}>
        <Typography variant="h4" className={classes.title}>
          About
        </Typography>
        <Typography component="p">
          This app is for people who really like music. Here it’s easy to find
          the right music for every moment - just open and listen to your
          favourite songs. You have a few options to find music on our service.
          Also you can create your own playlist. Our service is completely free
          to use.
        </Typography>
        <Typography component="p" variant="h6" className={classes.developed}>
          It is developed by:
        </Typography>
        <Grid container spacing={24}>
          {team.map((person, i) => (
            <Grid key={i} item xs={3}>
              <AboutCard person={person} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
