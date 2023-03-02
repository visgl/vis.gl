import type {AppProps} from 'next/app';
import Layout from '../components/layout';

import '../styles/fonts.css';
import '../styles/globals.css';
import '../styles/layout.css';
import {Global, ThemeProvider} from '@emotion/react';
import {globalStyle, theme} from '../components/styling/style';
import React from 'react';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
