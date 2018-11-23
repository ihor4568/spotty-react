import React, { Component } from "react";
import Player from "./Player";
import StarsRating from "../StarsRating";
import VolumeOff from "@material-ui/icons/VolumeOff";
import VolumeMute from "@material-ui/icons/VolumeMute";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

const SONG = {
  source:
    "https://firebasestorage.googleapis.com/v0/b/spotty-be0c7.appspot.com/o/Album1%2FAdam__Alma_-_04_-_Back_To_The_Sea.mp3?alt=media&token=f0f1439f-f09e-40d9-938d-c7f1a332a574",
  title:
    "https://firebasestorage.googleapis.com/v0/b/spotty-be0c7.appspot.com/o/Album1%2FBack_To_The_Sea.jpg?alt=media&token=a83f646a-9d63-4eaa-bcdf-e17cf6967126",
  songName: "Smile for me, sun",
  albumName: "Back to the sea",
  authorName: "Adam Alma"
};

const VOLUME_ICON_SET = {
  VolumeOff: <VolumeOff />,
  VolumeMute: <VolumeMute />,
  VolumeDown: <VolumeDown />,
  VolumeUp: <VolumeUp />
};

class PlayerContainer extends Component {
  state = {
    isPlaying: false,
    songDuration: 0,
    playingProgress: 0,
    volumeValue: 0.5
  };

  static defaultProps = {
    song: SONG
  };

  componentDidMount() {
    this.audio.addEventListener("play", this.handlePlay);
    this.audio.addEventListener("timeupdate", this.handlePlay);
  }

  componentWillUnmount() {
    this.audio.removeEventListener("play", this.handlePlay);
    this.audio.removeEventListener("timeupdate", this.handlePlay);
  }

  handleChangePlayingState = () => {
    this.setState(
      prevState => ({ isPlaying: !prevState.isPlaying }),
      this.setPlayingState
    );
  };

  handleChangeProgress = (event, value) => {
    this.setState({ playingProgress: value });
    this.audio.currentTime = (this.state.songDuration / 100) * value;
  };

  setPlayingState = () => {
    const { isPlaying } = this.state;

    if (!isPlaying) {
      this.audio.pause();
      return;
    }
    this.audio.play();
  };

  handlePlay = ({ target }) => {
    const { currentTime, duration } = target;
    const currentProgress = ((currentTime / duration) * 100).toFixed(2);

    this.setState({
      songDuration: duration,
      playingProgress: Number(currentProgress)
    });

    if (this.state.playingProgress === 100) {
      this.setState({
        playingProgress: 0,
        isPlaying: false
      });
    }
  };

  handleChangeVolume = (event, value) => {
    this.setState({ volumeValue: Number(value.toFixed(1)) });
    this.audio.volume = this.state.volumeValue;
  };

  getVolumeIcon = volume => {
    if (volume >= 0.1 && volume < 0.4) {
      return VOLUME_ICON_SET.VolumeMute;
    } else if (volume >= 0.4 && volume < 0.7) {
      return VOLUME_ICON_SET.VolumeDown;
    } else if (volume >= 0.7 && volume <= 1) {
      return VOLUME_ICON_SET.VolumeUp;
    } else {
      return VOLUME_ICON_SET.VolumeOff;
    }
  };

  render() {
    const { playingProgress, isPlaying, volumeValue } = this.state;
    const { song } = this.props;

    return (
      <>
        <audio src={song.source} ref={element => (this.audio = element)} />
        <Player
          onPlay={this.handleChangePlayingState}
          isPlaying={isPlaying}
          onChangeProgress={this.handleChangeProgress}
          progress={playingProgress}
          song={song}
          volume={volumeValue}
          volumeIcon={this.getVolumeIcon(volumeValue)}
          onChangeVolume={this.handleChangeVolume}
          ratingElement={<StarsRating />}
        />
      </>
    );
  }
}

export default PlayerContainer;
