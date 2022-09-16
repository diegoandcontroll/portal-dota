import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Sidebar } from '../components';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Sidebar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
