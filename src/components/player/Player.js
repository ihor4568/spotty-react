import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PlayIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Previous from "@material-ui/icons/SkipPrevious";
import Next from "@material-ui/icons/SkipNext";
import Star from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";
import ThreeDot from "@material-ui/icons/MoreVert";

const styles = theme => ({
  mediaPlayerAligner: {
    userSelect: "none",
    position: "fixed",
    zIndex: 3,
    bottom: 0,
    width: "100%",
    transition: "all 0.6s ease-in-out"
  },
  mediaPlayer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fefefe",
    height: "6.8rem"
  },
  audioInfoContainer: {
    flexBasis: "33%"
  },
  audioInfo: {
    display: "flex"
  },
  imageContainer: {
    height: "6.75rem"
  },
  image: {
    width: "6.5rem",
    height: "6.75rem"
  },
  audioInfoText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    marginLeft: "1.56rem"
  },
  songInfo: {
    fontWeight: "bold"
  },
  albumArtistInfo: {
    fontWeight: "semi-bold"
  },
  controlsContainer: {
    display: "flex",
    alignItems: "center"
  },
  controls: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  volumeControls: {
    display: "flex",
    alignItems: "center"
  },
  volumeBar: {
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    marginLeft: "2rem",
    color: "gray"
  },
  volumeSlider: {
    height: "0.2rem",
    width: "6rem",
    marginLeft: "0.625rem"
  },
  threeDotsMenu: {
    marginRight: "1rem"
  },
  prevNextButton: {
    margin: 0,
    padding: 0,
    color: "white",
    background: "#838383",
    minWidth: "2rem",
    minHeight: "1rem"
  },
  playButtonContainer: {
    width: "4.5rem",
    height: "4.5rem",
    marginRight: 20,
    marginLeft: 20
  },
  playButtonStateIcon: {
    fontSize: 45
  },
  fiveStars: {
    color: "gray",
    "&:hover": {
      color: "orange"
    }
  },
  threeDotMenu: {
    marginRight: "1.5rem",
    color: "gray"
  }
});

const Player = ({
  classes,
  theme,
  onPlay,
  isPlaying,
  onChangeProgress,
  progress,
  imageURL,
  songName,
  album,
  author,
  volume,
  volumeIcon,
  onChangeVolume
}) => (
  <div className={classes.mediaPlayerAligner}>
    <div className={classes.mediaPlayer}>
      <Slider value={progress} onChange={onChangeProgress} />
      <div className={classes.audioInfoContainer}>
        <div className={classes.audioInfo}>
          <div className={classes.imageContainer}>
            <img className={classes.image} src={imageURL} alt="album title" />
          </div>
          <div className={classes.audioInfoText}>
            <Typography variant="h6" className={classes.songInfo}>
              {songName}
            </Typography>
            <Typography component="h2" className={classes.albumArtistInfo}>
              {album} - {author}
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.controlsContainer}>
        <div className={classes.controls}>
          <Button className={classes.prevNextButton} variant="contained">
            {<Previous fontSize={"large"} />}
          </Button>
          <Button
            className={classes.playButtonContainer}
            onClick={onPlay}
            variant="fab"
            color="primary"
            aria-label="Play"
          >
            {isPlaying && <PauseIcon className={classes.playButtonStateIcon} />}
            {!isPlaying && <PlayIcon className={classes.playButtonStateIcon} />}
          </Button>
          <Button className={classes.prevNextButton} variant="contained">
            {<Next fontSize={"large"} />}
          </Button>
        </div>
        <div className={classes.volumeControls}>
          <div className={classes.volumeBar}>{volumeIcon}</div>
          <div className={classes.volumeSlider}>
            <Slider
              className={classes.volumeSlider}
              value={volume}
              max={1}
              onChange={onChangeVolume}
            />
          </div>
        </div>
      </div>
      <div>
        <Star className={classes.fiveStars} />
        <Star className={classes.fiveStars} />
        <Star className={classes.fiveStars} />
        <Star className={classes.fiveStars} />
        <Star className={classes.fiveStars} />
      </div>
      <div className={classes.threeDotMenu}>
        <ThreeDot />
      </div>
    </div>
    <div className={classes.modal} />
  </div>
);
export default withStyles(styles, { withTheme: true })(Player);
