import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

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
            autoComplete="current-password"
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Confirm password</InputLabel>
          <Input
            value={this.state.form.confirmPassword}
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
