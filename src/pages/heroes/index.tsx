/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Box, Flex, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { api } from '../../services/api';

export async function getServerSideProps() {
  const response = await api.get('/heroes');
  const data = await response.data;

  return {
    props: {
      heroes: data.items,
      meta: data.meta,
    },
  };
}
const index = ({ heroes, meta }: any) => {
  console.log(heroes);
  console.log(meta);
  return (
    <Box as="main" p="4" color="white" ml="12">
      <Head>
        <title>Heroes</title>
      </Head>
      <Flex justify="center" align="center" gap="8">
        <Box>
          <Heading fontWeight="light" textAlign="center" fontSize="2xl">
            Ecolha o hero para mais detalhes!
          </Heading>
        </Box>
        <Box>
          <img
            src="http://www.portaldota.com.br/imagens/heros/36_hero_anim.gif"
            alt="herogif"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default index;
