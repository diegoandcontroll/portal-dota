/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Heading, chakra } from '@chakra-ui/react';
import type { NextPage } from 'next';
import CaptionCarousel from '../components/Slider';

const Home: NextPage = () => {
  return (
    <Box as="main" color="white" pl="12">
      <Heading
        color="cyan.300"
        fontWeight="light"
        fontSize={['3xl', '6xl']}
        textAlign="center"
      >
        Welcome to Portal Dota
      </Heading>
      <Flex mt="4">
        <CaptionCarousel />
      </Flex>
      <Flex mt="8" align="center">
        <Heading color="gray.200" fontSize="2xl">
          Curiosidades:
        </Heading>

        <chakra.span color="gray.200" fontSize="1xl" px="8">
          Você sabia que a magia Chain Frost da Lich da ministun no primeiro
          alvo. Pode ser usado para cancelar magias de concentração como
          Epicenter, Fiend's Grip e ETC.
        </chakra.span>
      </Flex>
    </Box>
  );
};

export default Home;
