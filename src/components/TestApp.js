import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { withStyles } from '@material-ui/core/styles';

import StyledComponentsButton from './Button';

class App extends Component {

  render() {
    return (
		  <ThemeProvider theme={this.props.theme}>
			  	<StyledComponentsButton />
		  </ThemeProvider>
  	)
  }
}

export default withStyles(null, { withTheme: true })(App);
