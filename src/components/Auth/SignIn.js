import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-top: 30px;
`;

export default class SignIn extends Component {
  render() {
    return (
      <form>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input name="email" autoComplete="email" autoFocus />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            type="password"
            autoComplete="current-password"
          />
        </FormControl>
        <StyledButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign in
        </StyledButton>
      </form>
    );
  }
}
