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
  Spinner,
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
  const [loading, setLoading] = useState(false);

  const fechtHeroTavern = async (id: string) => {
    try {
      setLoading(true);
      const response = await api.get(
        `${process.env.NEXT_PUBLIC_API_URL}/tavern/${id}`
      );
      const data = await response.data;
      setHeroInfo(data[0].heroes);
      setLoading(false);
      setShow(!show);
    } catch (err) {
      setLoading(false);
      return err;
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box as="main" p="4" color="white" ml="12">
      <Head>
        <title>Taverns</title>
      </Head>
      <Flex
        justify="center"
        align="center"
        gap="8"
        direction={['column', 'row']}
      >
        <Box>
          <Heading
            fontWeight="light"
            textAlign="center"
            fontSize={['24', '2xl']}
          >
            Ecolha a taverna e selecione o hero
          </Heading>
        </Box>
        <Box>
          <img
            src="http://www.portaldota.com.br/imagens/heros/104_hero_anim.gif"
            alt="herogif"
          />
        </Box>
      </Flex>
      <Flex
        mt="8"
        justify="space-around"
        align="center"
        direction={['column', 'row']}
      >
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

                      <Flex align="flex-start" justify="flex-start" gap="2">
                        {heroInfo.map(
                          (hero: any) =>
                            item.id === hero.tavern.id && (
                              <>
                                {loading ? (
                                  <Spinner />
                                ) : (
                                  <>
                                    {show && (
                                      <Link
                                        key={hero.id}
                                        href={`/heroes/${hero.slug}`}
                                        passHref
                                      >
                                        <Flex cursor="pointer">
                                          <img src={hero.logo_hero} alt="" />
                                        </Flex>
                                      </Link>
                                    )}
                                  </>
                                )}
                              </>
                            )
                        )}
                      </Flex>
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

                      <Flex align="flex-start" justify="flex-start" gap="2">
                        {heroInfo.map(
                          (hero: any) =>
                            item.id === hero.tavern.id && (
                              <>
                                {loading ? (
                                  <Spinner />
                                ) : (
                                  <>
                                    {show && (
                                      <Link
                                        key={hero.id}
                                        href={`/heroes/${hero.slug}`}
                                        passHref
                                      >
                                        <Flex cursor="pointer">
                                          <img src={hero.logo_hero} alt="" />
                                        </Flex>
                                      </Link>
                                    )}
                                  </>
                                )}
                              </>
                            )
                        )}
                      </Flex>
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
