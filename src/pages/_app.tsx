import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Sidebar from '../components/Navbar';

import { theme } from '../styles/theme';

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
