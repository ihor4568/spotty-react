import Star from "@material-ui/icons/StarRate";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  setNewRatingForSong,
  loadSongsRating
} from "../../store/actionCreators/rating";

const styles = {
  starsRatingContainer: {
    display: "flex"
  },
  starsRating: {
    color: "gray",
    overflow: "hidden",
    cursor: "pointer"
  },
  active: {
    color: "orange"
  }
};

class StarsRating extends Component {
  static propTypes = {
    classes: PropTypes.object,
    loadSongsRating: PropTypes.func,
    setNewRatingForSong: PropTypes.func,
    songId: PropTypes.string,
    userUid: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    maxRating: PropTypes.number
  };

  state = {
    rating: this.getSongRating,
    tempRating: null
  };

  handleMouseover = newRating => {
    this.setState({
      tempRating: newRating
    });
  };

  handleMouseout = () => {
    this.setState({
      tempRating: null
    });
  };

  getSongsRating = () => {
    return this.props.loadSongsRating(this.props.userUid);
  };

  componentDidMount() {
    this.getSongsRating();
  }

  getSongRating = () => {
    const ratingObj = this.props.rating;
    const id = this.props.songId;
    return ratingObj[id];
  };

  rate = rating => {
    this.setState({
      ...this.state,
      rating: rating + 1,
      tempRating: null
    });
    this.props.setNewRatingForSong(
      this.props.userUid,
      this.props.songId,
      rating + 1
    );
  };

  componentWillUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      this.setState(() => ({
        ...this.state,
        rating: this.getSongRating()
      }));
    }
  }

  createStarsMaxCount = count => {
    return new Array(count).fill(0).map((_, i) => i);
  };

  createStars = count => {
    const { classes } = this.props;

    return this.createStarsMaxCount(count).map((item, i) => {
      let starClass = classes.starsRating;
      if (
        (this.state.tempRating >= i && this.state.tempRating !== null) ||
        (this.state.rating >= i + 1 && this.state.rating !== null)
      ) {
        starClass = `${classes.starsRating} ${classes.active}`;
      }
      return (
        <Star
          key={i}
          className={starClass}
          onMouseOver={() => this.handleMouseover(i)}
          onMouseOut={this.handleMouseout}
          onClick={() => this.rate(i)}
        />
      );
    });
  };

  render() {
    const { classes, maxRating } = this.props;

    return (
      <div className={classes.starsRatingContainer}>
        {this.createStars(maxRating)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    songId: state.player.song.id,
    userUid: state.auth.user.uid,
    rating: state.rating
  };
}

const mapDispatchToProps = {
  setNewRatingForSong,
  loadSongsRating
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(StarsRating));
