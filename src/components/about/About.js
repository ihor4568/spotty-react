import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AboutCard from "./AboutCard";
import Title from "../shared/Title";
import PropTypes from "prop-types";

const styles = theme => ({
  text: {
    fontSize: "1.2rem",
    paddingBottom: "0.5rem"
  },
  developed: {
    padding: "1rem 0 2rem"
  },
  link: {
    textDecoration: "none",
    fontSize: "1.35rem",
    color: theme.palette.primary.main
  },
  mentor: {
    padding: "2rem 0 1rem"
  },
  card: {
    margin: "0 auto"
  }
});

function About({ classes }) {
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
      <Title name="About" />
      <Typography component="p" className={classes.text}>
        Spotty empowers people to hear exactly what they love the moment they
        want it, and discover a universe of audio, all in one place. In the car,
        on the move, at home or in the office, we’re everywhere people want to
        listen.
      </Typography>
      <Typography component="p" className={classes.text}>
        Our service is completely free to use. The tracks all come from
        free-to-download, Creative Commons licensed albums. You can easily pick
        the right song and save it to your favorites. Create your own playlists
        and share the best hits with your friends!
      </Typography>
      <Typography component="p" variant="h6" className={classes.developed}>
        Developed by:
      </Typography>
      <Grid container className={classes.container} spacing={32}>
        {team.map((person, i) => (
          <Grid className={classes.card} key={i} item lg={3} md={4} sm={6}>
            <AboutCard person={person} />
          </Grid>
        ))}
      </Grid>
      <Typography component="p" variant="h6" className={classes.mentor}>
        Mentor:{" "}
        <span className={classes.link} href="#">
          Ihor Cheremskyi
        </span>
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

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(About);
