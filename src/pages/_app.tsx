/* eslint-disable react-hooks/rules-of-hooks */
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import Sidebar from '../components/Navbar';
import React from 'react';
import { theme } from '../styles/theme';
import '../styles/global.css';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </ChakraProvider>
  );
}

export default MyApp;
