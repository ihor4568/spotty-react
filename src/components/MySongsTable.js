import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import PlayArrow from "@material-ui/icons/PlayArrow";
import TimerSharp from "@material-ui/icons/TimerSharp";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

const TABLE_DATA = [
  {
    name: "It was a good day",
    image:
      "https://cs4.pikabu.ru/post_img/2016/06/23/2/1466644368111684747.png",
    time: "5:12",
    artist: "Ice Cube",
    album: "The Predator 1992"
  },
  {
    name: "Numb",
    image:
      "https://i.pinimg.com/originals/55/86/39/5586394e2ce162b044d9d49e412f9ece.png",
    time: "3:07",
    artist: "Linkin Park",
    album: "Meteora"
  },
  {
    name: "Just Lose It",
    image:
      "https://hiphop4real.com/wp-content/uploads/2016/07/Eminem-Revival-Era-2017-ePro-600x600.jpg",
    time: "4:06",
    artist: "Eminem",
    album: "Encore"
  }
];

const styles = theme => ({
  root: {
    width: "calc(100% - 2rem)",
    margin: "1rem auto 0",
    overflowX: "auto"
  },
  image: {
    width: "2rem",
    height: "2rem",
    borderRadius: ".2rem"
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
});

class MySongsTable extends React.Component {
  state = {
    order: "asc",
    orderBy: "number"
  };

  createNewSongsArray = arr => {
    arr.map((item, i) => {
      return (item.number = i + 1);
    });
    return arr;
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

  render() {
    const { classes } = this.props;
    const { order, orderBy } = this.state;
    return (
      <>
        <Typography variant="h4" component="h2">
          My Songs
        </Typography>
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
                        active={orderBy === "time"}
                        direction={order}
                        onClick={this.handleSortCreate("time")}
                      >
                        <TimerSharp className={classes.icon} />
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <Tooltip title="Sort" enterDelay={300}>
                      <TableSortLabel
                        active={orderBy === "artist"}
                        direction={order}
                        onClick={this.handleSortCreate("artist")}
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
                  this.createNewSongsArray(TABLE_DATA),
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
                        >
                          <PlayArrow className={classes.icon} />
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
                        {data.time}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {data.artist}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        {data.album}
                      </TableCell>
                      <TableCell
                        className={`${classes.tableCell} ${classes.fixedWidth}`}
                      >
                        <MoreVertIcon />
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

MySongsTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MySongsTable);
