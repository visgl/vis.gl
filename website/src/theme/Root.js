import React from 'react';
import {Global, ThemeProvider} from '@emotion/react';
import {globalStyle, theme} from '../../../components/styling/style';

export default function Root({children}) {
  return <ThemeProvider theme={theme}><Global styles={globalStyle} />{children}</ThemeProvider>;
}
