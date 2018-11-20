import React, { Component } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import styled from "styled-components";

const AuthContainer = styled.div`
  max-width: 18rem;
  margin: 0 auto;
`;

const AuthTab = styled(Tab)`
  min-width: 50%;
`;

export default class Auth extends Component {
  state = {
    activeTab: 0
  };

  handleTabChange = (event, activeTab) => {
    this.setState({ activeTab });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <AuthContainer>
        <Tabs value={activeTab} onChange={this.handleTabChange} fullWidth>
          <AuthTab label="Sign In" />
          <AuthTab label="Sign Up" />
        </Tabs>
        {activeTab === 0 && <SignIn />}
        {activeTab === 1 && <SignUp />}
      </AuthContainer>
    );
  }
}
