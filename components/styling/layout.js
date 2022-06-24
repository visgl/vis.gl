import React from 'react';
import {globalStyle, theme} from './style';
import {Global, ThemeProvider} from '@emotion/react';

export default function Layout({children}) {
  return <React.Fragment>{children}</React.Fragment>;
}
