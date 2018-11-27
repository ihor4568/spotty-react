import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Input,
  InputLabel,
  FormControl,
  Button,
  withStyles
} from "@material-ui/core";

const styles = {
  button: {
    marginTop: 30
  }
};

class SignUp extends Component {
  static propTypes = {
    classes: PropTypes.object
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

  render() {
    const { classes } = this.props;
    const { email, name, password, confirmPassword } = this.state;

    return (
      <form>
        <FormControl margin="normal" required fullWidth>
          <InputLabel>Email</InputLabel>
          <Input
            value={email}
            onChange={this.handleInputChange}
            name="email"
            type="text"
            autoComplete="email"
            autoFocus
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel>Name</InputLabel>
          <Input
            value={name}
            onChange={this.handleInputChange}
            name="name"
            type="text"
            autoComplete="name"
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel>Password</InputLabel>
          <Input
            value={password}
            onChange={this.handleInputChange}
            name="password"
            type="password"
            autoComplete="current-password"
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel>Confirm password</InputLabel>
          <Input
            value={confirmPassword}
            onChange={this.handleInputChange}
            name="confirmPassword"
            type="password"
            autoComplete="current-password"
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
