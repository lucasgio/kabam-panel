import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { Home } from './Home';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Home/>
  </ThemeProvider>,
  document.querySelector('#root'),
);
