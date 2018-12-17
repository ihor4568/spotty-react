import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import { ListItemIcon } from "@material-ui/core";
import { LibraryMusic } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import Title from "../shared/Title";
import TableLayout from "../shared/TableLayout";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadCachedUserSongs } from "../../store/actionCreators/userSongs";
import Loader from "../shared/Loader";

const styles = theme => ({
  content: {
    minHeight: `calc(100vh - (${theme.props.appBar.appBarHeight} + ${
      theme.props.mediaPlayer.mediaPlayerHeight
    }))`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    fontSize: "4rem"
  },
  text: {
    marginTop: "1rem",
    color: theme.props.icons.iconColor
  }
});

class MySongs extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    userSongs: PropTypes.array,
    songs: PropTypes.array,
    auth: PropTypes.object,
    loadCachedUserSongs: PropTypes.func,
    loader: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.loadCachedUserSongs(this.props.auth.user.uid);
  }

  render() {
    const { loader, classes } = this.props;

    if (loader) {
      return <Loader />;
    }

    if (this.props.songs.length !== 0) {
      return (
        <>
          <Title name="My Songs" />
          <TableLayout songs={this.props.songs} />
        </>
      );
    } else {
      return (
        <div className={classes.content}>
          <ListItemIcon>
            <LibraryMusic className={classes.icon} />
          </ListItemIcon>
          <Typography component="p" variant="h4" className={classes.text}>
            My Songs library is empty
          </Typography>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ auth, userSongs, loader }) => ({
  auth,
  songs: userSongs,
  loader
});

const mapDispatchToProps = {
  loadCachedUserSongs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(MySongs));
