import React, { Component } from "react";
import { Tabs, Tab, withStyles } from "@material-ui/core/";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import PropTypes from "prop-types";

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
    classes: PropTypes.object
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

    return (
      <div className={classes.container}>
        <Tabs
          value={activeTab}
          onChange={this.handleTabChange}
          indicatorColor="primary"
          fullWidth
        >
          <Tab className={classes.tab} label="Sign In" />
          <Tab className={classes.tab} label="Sign Up" />
        </Tabs>
        {activeTab === 0 && <SignIn />}
        {activeTab === 1 && <SignUp />}
      </div>
    );
  }
}

export default withStyles(styles)(Auth);
