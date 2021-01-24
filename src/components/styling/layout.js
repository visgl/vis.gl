import React from 'react';
import {GlobalStyle, theme} from './style';
import {ThemeProvider} from 'styled-components';

export default function Layout({children}) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        {children}
      </React.Fragment>
    </ThemeProvider>
  );
}
