import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { getSong } from "../../store/actionCreators/shareView";

const styles = {
  container: {
    width: `18rem`,
    paddingTop: `4rem`,
    margin: `0 auto`
  },
  songDescription: {
    padding: `0.5rem 1rem 0.7rem`
  },
  songInfo: {
    overflow: `hidden`,
    whiteSpace: `nowrap`,
    textOverflow: `ellipsis`
  }
};

class ShareView extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    info: PropTypes.object,
    match: PropTypes.object.isRequired,
    onGetSong: PropTypes.func
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.onGetSong(id);
    }
  }

  render() {
    const { classes } = this.props;

    if (!this.props.info) {
      return null;
    }

    return (
      <div className={classes.container}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image={this.props.info.album.coverURL}
              title={this.props.info.name}
            />
            <CardContent className={classes.songDescription}>
              <Typography
                variant="h6"
                component="h2"
                className={classes.songInfo}
              >
                {this.props.info.name}
              </Typography>
              <Typography component="p" className={classes.songInfo}>
                by {this.props.info.artistsNames.join(", ")}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    info: state.sharedSong
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetSong: id => dispatch(getSong(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ShareView));
