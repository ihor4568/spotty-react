import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";

const styles = {
  button: {
    marginTop: 30
  }
};

class SignIn extends Component {
  state = {
    form: {
      email: "",
      password: ""
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
            id="email"
            autoComplete="email"
            autoFocus
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Sign in
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(SignIn);
