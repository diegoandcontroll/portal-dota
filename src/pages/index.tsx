import { Box, Flex, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import CaptionCarousel from '../components/Slider';

const Home: NextPage = () => {
  return (
    <Box as="main" p="4" color="white" pl="12">
      <Heading
        color="cyan.300"
        fontWeight="light"
        fontSize="6xl"
        textAlign="center"
      >
        Welcome to Portal Dota
      </Heading>
      <Flex mt="20">
        <CaptionCarousel />
      </Flex>
      <Flex mt="20"></Flex>
    </Box>
  );
};

export default Home;
