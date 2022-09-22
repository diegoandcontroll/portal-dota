/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
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
import Link from 'next/link';
import { useState } from 'react';
import { api } from '../../services/api';
export async function getServerSideProps() {
  const response = await api.get('/tavern');
  const data = await response.data;

  return {
    props: {
      tavern: data,
    },
  };
}

const index = ({ tavern }: any) => {
  const [show, setShow] = useState(false);
  const [heroInfo, setHeroInfo] = useState([]);

  const fechtHeroTavern = async (id: string) => {
    const response = await api.get(`http://localhost:5000/tavern/${id}`);
    const data = await response.data;
    setHeroInfo(data[0].heroes);
    setShow(!show);
  };

  heroInfo.map((hero: any) => console.log(hero));
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
          <Heading fontSize="1xl" textAlign="center">
            Sentinel
          </Heading>
          <VStack>
            {tavern &&
              tavern.map(
                (item: any) =>
                  item.type === 'YES' && (
                    <>
                      <Box
                        py="4"
                        key={item.id}
                        onClick={() => fechtHeroTavern(item.id)}
                      >
                        <Flex
                          gap="6"
                          justify="center"
                          align="center"
                          direction="column"
                        >
                          <chakra.span>{item.name}</chakra.span>
                          <Wrap cursor="pointer">
                            <WrapItem>
                              <img src={item.tavern_url} alt="imagehero" />
                            </WrapItem>
                          </Wrap>
                        </Flex>
                      </Box>
                      {show && (
                        <Flex align="flex-start" justify="flex-start" gap="2">
                          {heroInfo.map(
                            (hero: any) =>
                              item.id === hero.tavern.id && (
                                <Link
                                  key={hero.id}
                                  href={`/heroes/${hero.slug}`}
                                  passHref
                                >
                                  <Flex cursor="pointer">
                                    <img src={hero.logo_hero} alt="" />
                                  </Flex>
                                </Link>
                              )
                          )}
                        </Flex>
                      )}
                    </>
                  )
              )}
          </VStack>
        </Box>
        <Box>
          <Heading fontSize="1xl" textAlign="center">
            Scourge
          </Heading>
          <VStack>
            {tavern &&
              tavern.map(
                (item: any) =>
                  item.type === 'NO' && (
                    <>
                      <Box
                        py="4"
                        key={item.id}
                        onClick={() => fechtHeroTavern(item.id)}
                      >
                        <Flex
                          gap="6"
                          justify="center"
                          align="center"
                          direction="column"
                        >
                          <chakra.span>{item.name}</chakra.span>
                          <Wrap cursor="pointer">
                            <WrapItem>
                              <img src={item.tavern_url} alt="imagehero" />
                            </WrapItem>
                          </Wrap>
                        </Flex>
                      </Box>
                      {show && (
                        <Flex align="flex-start" justify="flex-start" gap="2">
                          {heroInfo.map(
                            (hero: any) =>
                              item.id === hero.tavern.id && (
                                <Link
                                  key={hero.id}
                                  href={`/heroes/${hero.slug}`}
                                  passHref
                                >
                                  <Flex key={hero.id} cursor="pointer">
                                    <img src={hero.logo_hero} alt="" />
                                  </Flex>
                                </Link>
                              )
                          )}
                        </Flex>
                      )}
                    </>
                  )
              )}
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default index;
