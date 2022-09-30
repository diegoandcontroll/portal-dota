/* eslint-disable react-hooks/rules-of-hooks */
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Sidebar from '../components/Navbar';
import React from 'react';
import { theme } from '../styles/theme';
const client = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <Sidebar>
          <Hydrate state={pageProps}>
            <Component {...pageProps} />
          </Hydrate>
        </Sidebar>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
