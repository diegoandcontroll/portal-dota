/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Flex,
  Heading,
  chakra,
  Wrap,
  WrapItem,
  VStack,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

import CaptionCarousel from '../components/Slider';

const Home: NextPage = () => {
  return (
    <Box as="main" color="white" pl="12">
      <Head>
        <title>Portal Dota</title>
      </Head>
      <Heading
        color="cyan.300"
        fontWeight="light"
        fontSize={['3xl', '4xl']}
        textAlign="center"
      >
        Bem-vindo ao Portal dotA
      </Heading>
      <Flex mt="4">
        <CaptionCarousel />
      </Flex>
      <Flex mt="8" align="center">
        <Heading color="gray.200" fontSize="2xl">
          Curiosidades:
        </Heading>

        <chakra.span color="gray.200" fontSize="14" px="8">
          Você sabia que a magia Chain Frost da Lich da ministun no primeiro
          alvo. Pode ser usado para cancelar magias de concentração como
          Epicenter, Fiend's Grip e ETC.
        </chakra.span>
      </Flex>
      <Flex mt="8" justify="space-around" align="center">
        <Box>
          <Heading fontSize="1xl">Herois</Heading>
          <VStack>
            <Box py="4">
              <Flex gap="6" justify="center" align="center">
                <chakra.span fontSize="3xl">1°</chakra.span>
                <Wrap cursor="pointer">
                  <WrapItem>
                    <img src="/hero.jpg" alt="imagehero" />
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>

            <Box py="4">
              <Flex gap="6" justify="center" align="center">
                <chakra.span fontSize="3xl">2°</chakra.span>
                <Wrap cursor="pointer">
                  <WrapItem>
                    <img src="/hero.jpg" alt="imagehero" />
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>

            <Box py="4">
              <Flex gap="6" justify="center" align="center">
                <chakra.span fontSize="3xl">3°</chakra.span>
                <Wrap cursor="pointer">
                  <WrapItem>
                    <img src="/hero.jpg" alt="imagehero" />
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>
          </VStack>
        </Box>
        <Box>
          <Heading fontSize="1xl">Items</Heading>
          <VStack>
            <Box py="4">
              <Flex gap="6" justify="center" align="center">
                <chakra.span fontSize="3xl">1°</chakra.span>
                <Wrap cursor="pointer">
                  <WrapItem>
                    <img src="/item.jpg" alt="imagehero" />
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>

            <Box py="4">
              <Flex gap="6" justify="center" align="center">
                <chakra.span fontSize="3xl">2°</chakra.span>
                <Wrap cursor="pointer">
                  <WrapItem>
                    <img src="/item.jpg" alt="imagehero" />
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>

            <Box py="4">
              <Flex gap="6" justify="center" align="center">
                <chakra.span fontSize="3xl">3°</chakra.span>
                <Wrap cursor="pointer">
                  <WrapItem>
                    <img src="/item.jpg" alt="imagehero" />
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>
          </VStack>
        </Box>
      </Flex>
      <Flex justify="center" mt="4">
        Top 15
      </Flex>
      <Flex justify="center" align="center" mt="4">
        <Box
          as="iframe"
          src="https://www.youtube.com/embed/Q3mly14qwfU?start=17"
          width="70%"
          sx={{
            aspectRatio: '16/9',
          }}
          allowFullScreen
        />
      </Flex>
    </Box>
  );
};

export default Home;
