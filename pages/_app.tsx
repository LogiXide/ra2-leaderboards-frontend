import Head from 'next/head';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { theme } from 'shared/theme';
import createEmotionCache from 'shared/createEmotionCache';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/apollo/client';

import { MainLayout } from '@/modules/core/layouts/MainLayout'

import '../styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <ApolloProvider client={client}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Red Alert 2 leader boards</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  );
};

export default appWithTranslation(MyApp);
