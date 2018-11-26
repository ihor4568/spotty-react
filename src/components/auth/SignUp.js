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
    form: {
      email: "",
      name: "",
      password: "",
      confirmPassword: ""
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            value={this.state.form.email}
            onChange={this.handleInputChange}
            name="email"
            type="text"
            id="email"
            autoComplete="email"
            autoFocus
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            value={this.state.form.name}
            onChange={this.handleInputChange}
            name="name"
            type="text"
            id="name"
            autoComplete="name"
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            value={this.state.form.password}
            onChange={this.handleInputChange}
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="confirmPassword">Confirm password</InputLabel>
          <Input
            value={this.state.form.confirmPassword}
            onChange={this.handleInputChange}
            name="confirmPassword"
            type="password"
            id="confirmPassword"
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
