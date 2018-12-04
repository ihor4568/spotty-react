import React, { Component } from "react";
import {
  VolumeOff,
  VolumeMute,
  VolumeDown,
  VolumeUp
} from "@material-ui/icons";
import PropTypes from "prop-types";

import Player from "./Player";

import { connect } from "react-redux";

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

export class PlayerContainer extends Component {
  state = {
    isPlaying: false,
    songDuration: 0,
    playingProgress: 0,
    volumeValue: 0.5,
    isMuted: false
  };

  static defaultProps = {
    song: SONG
  };

  static propTypes = {
    song: PropTypes.shape({
      source: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      songName: PropTypes.string.isRequired,
      albumName: PropTypes.string.isRequired,
      authorName: PropTypes.string.isRequired
    }),
    songs: PropTypes.array.isRequired,
    player: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.addListeners();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  addListeners = () => {
    this.audio.addEventListener("play", this.handlePlay);
    this.audio.addEventListener("timeupdate", this.handlePlay);
  };

  removeListeners = () => {
    this.audio.removeEventListener("play", this.handlePlay);
    this.audio.removeEventListener("timeupdate", this.handlePlay);
  };

  handleChangePlayingState = () => {
    this.setState(
      prevState => ({ isPlaying: !prevState.isPlaying }),
      this.setPlayingState
    );
  };

  handleChangeProgress = (event, value) => {
    this.setState({ playingProgress: value });
  };

  handleChangeProgressStart = () => {
    this.removeListeners();
  };

  handleChangeProgressEnd = () => {
    this.addListeners();
    this.audio.currentTime =
      (this.state.songDuration / 100) * this.state.playingProgress;
  };

  setPlayingState = () => {
    /*const { isPlaying } = this.state;

    if (!isPlaying) {
      this.audio.pause();
      return;
    }

    this.audio.play();*/

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
    const volume = Number(value.toFixed(1));

    this.setState({ volumeValue: volume, isMuted: volume === 0 });
    this.audio.volume = volume;
  };

  handleMute = () => {
    this.setState(prevState => {
      const isMuted = !prevState.isMuted;
      const volume = prevState.volumeValue || 0.5;
      this.audio.volume = isMuted ? 0 : volume;
      return { isMuted, volumeValue: volume };
    });
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
    const { playingProgress, isPlaying, volumeValue, isMuted } = this.state;
    const { song } = this.props;
    const volume = isMuted ? 0 : volumeValue;

    if (this.audio) {
      this.setPlayingState();
    }

    return (
      <>
        <audio
          src={this.props.player.payload.songURL}
          ref={element => (this.audio = element)}
        />
        <Player
          onPlay={this.handleChangePlayingState}
          isPlaying={isPlaying}
          onChangeProgress={this.handleChangeProgress}
          progress={playingProgress}
          song={song}
          volume={volume}
          volumeIcon={this.getVolumeIcon(volume)}
          onChangeVolume={this.handleChangeVolume}
          onMute={this.handleMute}
          onChangeProgressStart={this.handleChangeProgressStart}
          onChangeProgressEnd={this.handleChangeProgressEnd}
        />
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

export default connect(mapStateToProps)(PlayerContainer);
