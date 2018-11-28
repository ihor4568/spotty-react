import React, { Component } from "react";
import { Tabs, Tab, withStyles } from "@material-ui/core/";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { signIn, signUp } from "../../store/actionCreators/auth";

const styles = {
  container: {
    maxWidth: "18rem",
    margin: "0 auto"
  },
  tab: {
    minWidth: "50%"
  }
};

class Auth extends Component {
  static propTypes = {
    classes: PropTypes.object,
    signIn: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
  };

  state = {
    activeTab: 0
  };

  handleTabChange = (event, activeTab) => {
    this.setState({ activeTab });
  };

  render() {
    const { activeTab } = this.state;
    const { classes } = this.props;

    if (this.props.isLoggedIn) {
      return (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      );
    }

    return (
      <div className={classes.container}>
        <Tabs value={activeTab} onChange={this.handleTabChange} fullWidth>
          <Tab className={classes.tab} label="Sign In" />
          <Tab className={classes.tab} label="Sign Up" />
        </Tabs>
        {activeTab === 0 && <SignIn onSubmit={this.props.signIn} />}
        {activeTab === 1 && <SignUp onSubmit={this.props.signUp} />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(
  mapStateToProps,
  { signIn, signUp }
)(withStyles(styles)(Auth));
