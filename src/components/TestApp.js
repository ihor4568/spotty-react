import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { withStyles } from '@material-ui/core/styles';

import PrimarySearchAppBar from './TestPrimarySearchAppBar';

class App extends Component {

  render() {
    return (
		  <ThemeProvider theme={this.props.theme}>
			  	<PrimarySearchAppBar />
		  </ThemeProvider>
  	)
  }
}

export default withStyles(null, { withTheme: true })(App);
