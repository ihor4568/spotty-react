import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Input,
  InputLabel,
  FormControl,
  Button,
  withStyles,
  Avatar
} from "@material-ui/core";
import { AccountCircle, PhotoCamera } from "@material-ui/icons";
import FileUploader from "react-firebase-file-uploader";
import { FirebaseService } from "../../services/FirebaseService";
import Error from "./Error";

const styles = theme => ({
  button: {
    marginTop: 30
  },
  inputLabel: {
    "&$inputLabelFocused": {
      color: theme.palette.primary.main
    }
  },
  inputLabelFocused: {},
  inputUnderline: {
    "&:after": {
      borderBottomColor: theme.palette.primary.main
    }
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "1rem"
  },
  avatarImage: {
    maxWidth: "3rem",
    maxHeight: "3rem",
    borderRadius: "50%"
  }
});

class SignUp extends Component {
  static propTypes = {
    classes: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired,
    errorText: PropTypes.string
  };

  state = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    avatarURL: "",
    canSubmit: true
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      this.props.onSubmit(this.state);
    } else {
      this.props.onError("Passwords do not match");
    }
  };

  handleUploadStart = () => {
    this.setState({
      canSubmit: false
    });
  };

  handleUploadSuccess = filename => {
    FirebaseService.storage()
      .ref("images/avatars")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }))
      .then(
        this.setState({
          canSubmit: true
        })
      );
  };

  render() {
    const { classes } = this.props;
    const { email, name, password, confirmPassword } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel
            classes={{
              root: classes.inputLabel,
              focused: classes.inputLabelFocused
            }}
          >
            Email
          </InputLabel>
          <Input
            value={email}
            onChange={this.handleInputChange}
            name="email"
            type="text"
            autoComplete="email"
            classes={{
              underline: classes.inputUnderline
            }}
            autoFocus
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel
            classes={{
              root: classes.inputLabel,
              focused: classes.inputLabelFocused
            }}
          >
            Name
          </InputLabel>
          <Input
            value={name}
            onChange={this.handleInputChange}
            name="name"
            type="text"
            autoComplete="name"
            classes={{
              underline: classes.inputUnderline
            }}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel
            classes={{
              root: classes.inputLabel,
              focused: classes.inputLabelFocused
            }}
          >
            Password
          </InputLabel>
          <Input
            value={password}
            onChange={this.handleInputChange}
            name="password"
            type="password"
            autoComplete="current-password"
            classes={{
              underline: classes.inputUnderline
            }}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel
            classes={{
              root: classes.inputLabel,
              focused: classes.inputLabelFocused
            }}
          >
            Confirm password
          </InputLabel>
          <Input
            value={confirmPassword}
            onChange={this.handleInputChange}
            name="confirmPassword"
            type="password"
            autoComplete="current-password"
            classes={{
              underline: classes.inputUnderline
            }}
          />
        </FormControl>
        <div className={classes.avatarContainer}>
          <Button variant="contained" component="label">
            Add Your photo
            <FileUploader
              hidden
              accept="image/*"
              name="avatar"
              filename={email.replace(/[^A-Za-zА_]/g, "") + "-avatar"}
              storageRef={FirebaseService.storage().ref("images/avatars")}
              onUploadStart={this.handleUploadStart}
              onUploadSuccess={this.handleUploadSuccess}
            />
            <PhotoCamera />
          </Button>
          {this.state.avatarURL ? (
            <Avatar
              src={this.state.avatarURL}
              className={classes.avatarImage}
              alt="user-avatar"
            />
          ) : (
            <AccountCircle />
          )}
        </div>
        <Button
          type="submit"
          disabled={!this.state.canSubmit}
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Sign Up
        </Button>
        {this.props.errorText && <Error text={this.props.errorText} />}
      </form>
    );
  }
}

export default withStyles(styles)(SignUp);
