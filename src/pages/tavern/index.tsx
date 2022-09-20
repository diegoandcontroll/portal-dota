/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Flex,
  Heading,
  VStack,
  WrapItem,
  Wrap,
  chakra,
} from '@chakra-ui/react';
import Head from 'next/head';

const index = () => {
  return (
    <Box as="main" p="4" color="white" ml="12">
      <Head>
        <title>Taverns</title>
      </Head>
      <Flex justify="center" align="center">
        <Box>
          <Heading fontWeight="thin" textAlign="center" fontSize="1xl">
            Ecolha a taverna abaixo e selecione o hero
          </Heading>
        </Box>
        <Box>
          <img
            src="http://www.portaldota.com.br/imagens/heros/99_hero_anim.gif"
            alt="herogif"
          />
        </Box>
      </Flex>
      <Flex mt="8" justify="space-around" align="center">
        <Box>
          <Heading fontSize="1xl">Sentinel</Heading>
          <VStack>
            <Box py="4">
              <Flex gap="6" justify="center" align="center" direction="column">
                <chakra.span>Força 1</chakra.span>
                <Wrap cursor="pointer">
                  <WrapItem>
                    <img src="/tavern.jpg" alt="imagehero" />
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>

            <Box py="4">
              <Flex gap="6" justify="center" align="center" direction="column">
                <chakra.span>Força 1</chakra.span>
                <Wrap cursor="pointer">
                  <WrapItem>
                    <img src="/tavern.jpg" alt="imagehero" />
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>

            <Box py="4">
              <Flex gap="6" justify="center" align="center" direction="column">
                <chakra.span>Força 1</chakra.span>
                <Wrap cursor="pointer">
                  <WrapItem>
                    <img src="/tavern.jpg" alt="imagehero" />
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>
          </VStack>
        </Box>
        <Box>
          <Heading fontSize="1xl">Scourge</Heading>
          <VStack>
            <Box py="4">
              <Flex gap="6" justify="center" align="center" direction="column">
                <chakra.span>Força 1</chakra.span>
                <Wrap cursor="pointer">
                  <WrapItem>
                    <img src="/tavern.jpg" alt="imagehero" />
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>

            <Box py="4">
              <Flex gap="6" justify="center" align="center" direction="column">
                <chakra.span>Força 1</chakra.span>
                <Wrap cursor="pointer">
                  <WrapItem>
                    <img src="/tavern.jpg" alt="imagehero" />
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>

            <Box py="4">
              <Flex gap="6" justify="center" align="center" direction="column">
                <chakra.span>Força 1</chakra.span>
                <Wrap cursor="pointer">
                  <WrapItem>
                    <img src="/tavern.jpg" alt="imagehero" />
                  </WrapItem>
                </Wrap>
              </Flex>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default index;
