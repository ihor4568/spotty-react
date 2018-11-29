import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Input,
  InputLabel,
  FormControl,
  Button,
  withStyles
} from "@material-ui/core";

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
  }
});

class SignUp extends Component {
  static propTypes = {
    classes: PropTypes.object,
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    email: "",
    name: "",
    password: "",
    confirmPassword: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Sign Up
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(SignUp);
