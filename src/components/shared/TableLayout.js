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
import DotsMenu from "./DotsMenu";

import { connect } from "react-redux";
import { playSong } from "../../store/actionCreators/player";
import { pauseSong } from "../../store/actionCreators/player";
import { loadArtistsSongs } from "../../store/actionCreators/songs";

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
    playSong: PropTypes.func.isRequired,
    pauseSong: PropTypes.func.isRequired,
    loadArtistsSongs: PropTypes.func
  };

  state = {
    order: "asc",
    orderBy: "number"
  };

  componentDidMount() {
    this.props.loadArtistsSongs("artist2");
  }

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

  handlePlayPauseButton = data => {
    if (this.props.player.isPlaying && data.id === this.props.player.song.id) {
      this.props.pauseSong(data);
    } else {
      this.props.playSong(data);
    }
  };

  handleChangeIconButton = data => {
    const { classes } = this.props;
    const { isPlaying, song } = this.props.player;

    if (isPlaying && data.id === song.id) {
      return <Pause className={classes.icon} />;
    } else {
      return <PlayArrow className={classes.icon} />;
    }
  };

  render() {
    const { classes, songs } = this.props;
    const { order, orderBy } = this.state;
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
                ).map((data, i) => {
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
                            this.handlePlayPauseButton(data);
                          }}
                        >
                          {this.handleChangeIconButton(data)}
                        </Button>
                      </TableCell>
                      <TableCell
                        className={`${classes.tableCell} ${classes.fixedWidth}`}
                      >
                        {data.number}
                      </TableCell>
                      <TableCell
                        className={`${classes.tableCell} ${classes.fixedWidth}`}
                      >
                        <img
                          src={data.image}
                          alt="album"
                          className={classes.image}
                        />
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {data.name}
                      </TableCell>
                      <TableCell
                        className={`${classes.tableCell} ${classes.fixedWidth}`}
                      >
                        {data.duration}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {data.artists}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {data.album}
                      </TableCell>
                      <TableCell
                        className={`${classes.tableCell} ${classes.fixedWidth}`}
                      >
                        <DotsMenu />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </Paper>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    songs: state.songs,
    player: state.player
  };
}

const mapDispatchToProps = {
  playSong,
  pauseSong,
  loadArtistsSongs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TableLayout));
