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
import { pauseSong, playSong } from "../../store/actionCreators/player";
import LegalDialog from "../shared/LegalDialog";
import {
  addUserSong,
  removeUserSong
} from "../../store/actionCreators/userSongs";

const VOLUME_ICON_SET = {
  VolumeOff: <VolumeOff />,
  VolumeMute: <VolumeMute />,
  VolumeDown: <VolumeDown />,
  VolumeUp: <VolumeUp />
};

export class PlayerContainer extends Component {
  state = {
    songDuration: 0,
    playingProgress: 0,
    volumeValue: 0.5,
    isMuted: false,
    isDialogOpen: false
  };

  static propTypes = {
    userSongs: PropTypes.array,
    auth: PropTypes.object,
    player: PropTypes.object,
    playSong: PropTypes.func,
    pauseSong: PropTypes.func,
    addUserSong: PropTypes.func,
    removeUserSong: PropTypes.func
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
    window.open(`/songs/${songId}`);
  };

  componentDidMount() {
    this.addListeners();
  }

  componentWillUnmount() {
    this.removeListeners();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps !== this.props) {
      this.setPlayingState();
    }
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
    if (this.props.player.isPlaying) {
      this.props.pauseSong(this.props.player.song);
    } else {
      this.props.playSong(this.props.player.song);
    }
    this.setPlayingState();
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
    const { isPlaying } = this.props.player;

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
        playingProgress: 0
      });
      this.props.pauseSong(this.props.player.song);
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

  handleDialogOpen = () => {
    this.setState({
      isDialogOpen: true
    });
  };

  handleDialogClose = () => {
    this.setState({
      isDialogOpen: false
    });
  };

  render() {
    const { playingProgress, volumeValue, isMuted, isDialogOpen } = this.state;
    const { song } = this.props.player;
    const volume = isMuted ? 0 : volumeValue;
    const songId = this.props.player.song.id;

    return (
      <>
        <audio src={song.songURL} ref={element => (this.audio = element)} />
        <Player
          onPlay={this.handleChangePlayingState}
          onChangeProgress={this.handleChangeProgress}
          progress={playingProgress}
          song={song}
          volume={volume}
          volumeIcon={this.getVolumeIcon(volume)}
          onChangeVolume={this.handleChangeVolume}
          onMute={this.handleMute}
          onChangeProgressStart={this.handleChangeProgressStart}
          onChangeProgressEnd={this.handleChangeProgressEnd}
          player={this.props.player}
          onDialogOpen={this.handleDialogOpen.bind(this, song)}
          addRemoveTitle={this.getMenuItemTitle(
            songId,
            this.checkSongId(songId)
          )}
          onShare={this.handleShare.bind(this, songId)}
          onAddRemoveSong={this.handleOperation.bind(
            this,
            songId,
            this.checkSongId(songId)
          )}
        />
        <LegalDialog
          isOpen={isDialogOpen}
          onClose={this.handleDialogClose}
          licenseInfo={song.licenseInfo ? song.licenseInfo : ""}
          licenseURL={song.licenseURL ? song.licenseURL : ""}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    player: state.player,
    userSongs: state.userSongs,
    auth: state.auth
  };
}

const mapDispatchToProps = {
  playSong,
  pauseSong,
  addUserSong,
  removeUserSong
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);
