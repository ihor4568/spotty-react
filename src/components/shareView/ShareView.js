import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";

import { MusicService } from "../../services/MusicService";

const SHARE_INFO = {
  imageUrl:
    "http://1.bp.blogspot.com/-gJPfokcNytE/Uy0KljKYg8I/AAAAAAAAAKk/8UhzMrqWjbg/s1600/397803_10151392708761987_1614138446_n.jpg",
  songName: "The Eminem Song",
  artistName: "Eminem"
};
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
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    if (id) {
      MusicService.getSong(id).then(song => song);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image={SHARE_INFO.imageUrl}
              title={SHARE_INFO.songName}
            />
            <CardContent className={classes.songDescription}>
              <Typography
                variant="h6"
                component="h2"
                className={classes.songInfo}
              >
                {SHARE_INFO.songName}
              </Typography>
              <Typography component="p" className={classes.songInfo}>
                by {SHARE_INFO.artistName}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shareInfo: state.shareViewReducer.artistName
  };
}

export default connect(mapStateToProps)(withStyles(styles)(ShareView));
