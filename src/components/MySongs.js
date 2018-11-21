import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import PlayArrow from "@material-ui/icons/PlayArrow";

const TABLE_DATA = [
  {
    name: "Skyfall",
    image:
      "https://rukminim1.flixcart.com/image/128/128/av-media/music/j/n/g/21-original-imadgqh3hzzd8rvc.jpeg?q=70",
    time: "4:15",
    artist: "Adele",
    album: "Adele 21"
  },
  {
    name: "new name",
    image:
      "https://i.pinimg.com/originals/55/86/39/5586394e2ce162b044d9d49e412f9ece.png",
    time: 214,
    artist: "Ooooooops",
    album: 71
  },
  {
    name: "am12e",
    image:
      "https://i.pinimg.com/originals/55/86/39/5586394e2ce162b044d9d49e412f9ece.png",
    time: "item",
    artist: 12.0,
    album: "Test"
  },
  {
    name: "BOTTOM",
    image:
      "https://i.pinimg.com/originals/55/86/39/5586394e2ce162b044d9d49e412f9ece.png",
    time: 74,
    artist: 1.0,
    album: "album new"
  }
];

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  image: {
    width: "2rem",
    height: "2rem",
    borderRadius: ".2rem"
  },
  button: {
    backgroundColor: `inherit`,
    borderRadius: `.2rem`,
    height: `50%`,
    width: `50%`,
    boxShadow: `none`,

    "&:hover": {
      backgroundColor: `inherit`
    },
    "&:active": {
      backgroundColor: `inherit`
    }
  },
  icon: {
    // backgroundColor: `#000`,
    color: `#000`
  }
});

class MySongs extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>#</TableCell>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Artist</TableCell>
              <TableCell>Album</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {TABLE_DATA.map((row, i) => {
              return (
                <TableRow key={i} hover={true}>
                  <TableCell>
                    <Button
                      variant="fab"
                      color="primary"
                      aria-label="PlayArrow"
                      className={classes.button}
                    >
                      <PlayArrow className={classes.icon} />
                    </Button>
                  </TableCell>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>
                    <img
                      src={row.image}
                      alt="album"
                      className={classes.image}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>{row.artist}</TableCell>
                  <TableCell>{row.album}</TableCell>
                  <TableCell />
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

MySongs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MySongs);
