/* eslint-disable @next/next/no-img-element */
import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';
import Head from 'next/head';

const index = () => {
  return (
    <Box as="main" p="4" color="white" ml="12">
      <Head>
        <title>Items</title>
      </Head>
      <Flex justify="center" align="center">
        <Box>
          <Heading fontWeight="thin" textAlign="center" fontSize="1xl">
            In development page
          </Heading>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt="8"
          >
            <Spinner />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default index;
