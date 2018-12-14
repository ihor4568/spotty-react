import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  Tooltip,
  Button
} from "@material-ui/core";

import { PlayArrow, Pause, TimerSharp } from "@material-ui/icons";
import DotsMenu from "./dotsMenu/DotsMenu";
import DotsMenuItem from "./dotsMenu/DotsMenuItem";
import LegalDialog from "./LegalDialog";

import { connect } from "react-redux";
import {
  playSong,
  pauseSong,
  saveSongs
} from "../../store/actionCreators/player";

import {
  addUserSong,
  removeUserSong
} from "../../store/actionCreators/userSongs";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    margin: "2rem auto",
    overflowX: "auto"
  },
  image: {
    width: "2rem",
    height: "2rem",
    borderRadius: ".2rem",
    marginRight: `1rem`
  },
  button: {
    color: "inherit",
    backgroundColor: `inherit`,
    borderRadius: `.2rem`,
    boxShadow: `none`,
    "&:hover": {
      backgroundColor: `inherit`
    },
    "&:active": {
      backgroundColor: `inherit`,
      boxShadow: `none`
    }
  },
  tableCell: {
    padding: 0,
    width: `28%`
  },
  fixedWidth: {
    width: `auto`
  }
};

class TableLayout extends Component {
  static propTypes = {
    songs: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
    player: PropTypes.object.isRequired,
    userSongs: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
    playSong: PropTypes.func.isRequired,
    pauseSong: PropTypes.func.isRequired,
    saveSongs: PropTypes.func.isRequired,
    addUserSong: PropTypes.func.isRequired,
    removeUserSong: PropTypes.func.isRequired
  };

  state = {
    order: "asc",
    orderBy: "number",
    songToDialog: null
  };

  handleDialogOpen = song => {
    this.setState({
      songToDialog: song
    });
  };

  handleDialogClose = () => {
    this.setState({
      songToDialog: null
    });
  };

  checkSongId(songId) {
    return this.props.userSongs.some(elem => elem.id === songId);
  }

  getMenuItemTitle = (songId, checkSongId) => {
    if (checkSongId) {
      return "Remove from my songs";
    }
    return "Add to my songs";
  };

  handleOperation = (songId, checkSongId) => {
    if (checkSongId) {
      this.props.removeUserSong(this.props.auth.user.uid, songId);
    } else {
      this.props.addUserSong(this.props.auth.user.uid, songId);
    }
  };

  handleShare = songId => {
    if (songId) {
      window.open(`/songs/${songId}`);
    }
  };

  createNewSongsArray = arr => {
    return arr.map((item, i) => {
      return {
        ...item,
        number: i + 1,
        image: item.album.coverURL,
        album: item.album.name,
        artists: item.artistsNames.join(`, `)
      };
    });
  };

  handleSortCreate = property => event => {
    this.handleRequestSort(event, property);
  };

  handleRequestSort = (event, property) => {
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy: property });
  };

  compareDesc = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  stableSort = (array, cmp) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  };

  getSorting = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => this.compareDesc(a, b, orderBy)
      : (a, b) => -this.compareDesc(a, b, orderBy);
  };

  handlePlayPauseButton = song => {
    const { isPlaying, savedSongs } = this.props.player;
    const { pauseSong, saveSongs, playSong, songs } = this.props;
    const i = song.number - 1;

    if (isPlaying) {
      if (song.id === this.props.player.song.id) {
        pauseSong(savedSongs[i]);
      } else {
        pauseSong(savedSongs[i]);
        saveSongs(songs);
        playSong(songs[i], i);
      }
    } else {
      saveSongs(songs);
      playSong(songs[i], i);
    }
  };

  getButtonIcon = song => {
    const { classes } = this.props;
    const { isPlaying } = this.props.player;
    if (isPlaying && song.id === this.props.player.song.id) {
      return <Pause className={classes.icon} />;
    } else {
      return <PlayArrow className={classes.icon} />;
    }
  };

  render() {
    const { classes, songs } = this.props;
    const { order, orderBy, songToDialog } = this.state;

    if (songs.length === 0) {
      return null;
    }

    return (
      <>
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table className={classes.table} aria-labelledby="tableTitle">
              <TableHead>
                <TableRow>
                  <TableCell
                    className={`${classes.tableCell} ${classes.fixedWidth}`}
                  />
                  <TableCell
                    className={`${classes.tableCell} ${classes.fixedWidth}`}
                  >
                    <Tooltip title="Sort" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === "number"}
                        direction={order}
                        onClick={this.handleSortCreate("number")}
                      >
                        #
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    className={`${classes.tableCell} ${classes.fixedWidth}`}
                  />
                  <TableCell className={classes.tableCell}>
                    <Tooltip title="Sort" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === "name"}
                        direction={order}
                        onClick={this.handleSortCreate("name")}
                      >
                        Name
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    className={`${classes.tableCell} ${classes.fixedWidth}`}
                  >
                    <Tooltip title="Sort" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === "duration"}
                        direction={order}
                        onClick={this.handleSortCreate("duration")}
                      >
                        <TimerSharp className={classes.icon} />
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <Tooltip title="Sort" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === "artists"}
                        direction={order}
                        onClick={this.handleSortCreate("artists")}
                      >
                        Artist
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <Tooltip title="Sort" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === "album"}
                        direction={order}
                        onClick={this.handleSortCreate("album")}
                      >
                        Album
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    className={`${classes.tableCell} ${classes.fixedWidth}`}
                  />
                </TableRow>
              </TableHead>
              <TableBody>
                {this.stableSort(
                  this.createNewSongsArray(songs),
                  this.getSorting(order, orderBy)
                ).map((song, i) => {
                  return (
                    <TableRow hover key={i}>
                      <TableCell
                        className={`${classes.tableCell} ${classes.fixedWidth}`}
                      >
                        <Button
                          mini={true}
                          variant="fab"
                          aria-label="PlayArrow"
                          className={classes.button}
                          onClick={() => {
                            this.handlePlayPauseButton(song);
                          }}
                        >
                          {this.getButtonIcon(song)}
                        </Button>
                      </TableCell>
                      <TableCell
                        className={`${classes.tableCell} ${classes.fixedWidth}`}
                      >
                        {song.number}
                      </TableCell>
                      <TableCell
                        className={`${classes.tableCell} ${classes.fixedWidth}`}
                      >
                        <img
                          src={song.image}
                          alt="album"
                          className={classes.image}
                        />
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {song.name}
                      </TableCell>
                      <TableCell
                        className={`${classes.tableCell} ${classes.fixedWidth}`}
                      >
                        {song.duration}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {song.artists}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {song.album}
                      </TableCell>
                      <TableCell
                        className={`${classes.tableCell} ${classes.fixedWidth}`}
                      >
                        <DotsMenu>
                          <DotsMenuItem
                            onClick={this.handleDialogOpen.bind(this, song)}
                          >
                            Legal info
                          </DotsMenuItem>
                          <DotsMenuItem
                            onClick={this.handleOperation.bind(
                              this,
                              song.id,
                              this.checkSongId(song.id)
                            )}
                          >
                            {this.getMenuItemTitle(
                              song.id,
                              this.checkSongId(song.id)
                            )}
                          </DotsMenuItem>
                          <DotsMenuItem
                            onClick={this.handleShare.bind(this, song.id)}
                          >
                            Share
                          </DotsMenuItem>
                        </DotsMenu>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <LegalDialog
              isOpen={!!songToDialog}
              onClose={this.handleDialogClose}
              licenseInfo={songToDialog ? songToDialog.licenseInfo : ""}
              licenseURL={songToDialog ? songToDialog.licenseURL : ""}
            />
          </div>
        </Paper>
      </>
    );
  }
}

const mapStateToProps = ({ player, userSongs, auth, search }, { songs }) => ({
  player,
  userSongs,
  auth,
  songs: songs.filter(song => {
    const songName = song.name.toLowerCase();
    return songName.indexOf(search.toLowerCase()) !== -1;
  })
});

const mapDispatchToProps = {
  playSong,
  pauseSong,
  addUserSong,
  removeUserSong,
  saveSongs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TableLayout));
