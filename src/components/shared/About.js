import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AboutCard from "../AboutCard";
import Grid from "@material-ui/core/Grid";

const styles = () => ({
  title: {
    paddingBottom: "1.5rem"
  },
  text: {
    fontSize: "1.2rem",
    paddingBottom: "0.5rem"
  },
  developed: {
    padding: "1rem 0 2rem"
  },
  link: {
    textDecoration: "none",
    fontSize: "1.35rem"
  },
  mentor: {
    padding: "2rem 0 1rem"
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
      <>
        <Typography variant="h4" className={classes.title}>
          About
        </Typography>
        <Typography component="p" className={classes.text}>
          Spotty empowers people to hear exactly what they love the moment they
          want it, and discover a universe of audio, all in one place. In the
          car, on the move, at home or in the office, we’re everywhere people
          want to listen.
        </Typography>
        <Typography component="p" className={classes.text}>
          Our service is completely free to use. The tracks all come from
          free-to-download, Creative Commons licensed albums. You can easely
          pick the right song and save it to your favourites. Create your own
          playlists and share the best hits with your friends!
        </Typography>
        <Typography component="p" variant="h6" className={classes.developed}>
          Developed by:
        </Typography>
        <Grid container spacing={32}>
          {team.map((person, i) => (
            <Grid key={i} item xs={3}>
              <AboutCard person={person} />
            </Grid>
          ))}
        </Grid>
        <Typography component="p" variant="h6" className={classes.mentor}>
          Mentor:{" "}
          <a
            className={classes.link}
            href="https://www.linkedin.com/in/ihor-cheremskyi-035b5714b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ihor Cheremskyi
          </a>
        </Typography>
        <Typography component="p" variant="h6">
          Source code:{" "}
          <a
            className={classes.link}
            href="https://github.com/ihor4568/spotty-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </Typography>
      </>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
