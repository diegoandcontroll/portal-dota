/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Card from '../../components/Card';
import { api } from '../../services/api';

export async function getServerSideProps() {
  const response = await api.get('/heroes?limit=6&page=1');
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
      <Grid templateColumns="repeat(3, 1fr)" gap={12}>
        {heroes?.map((hero: any) => (
          <GridItem w="100%" key={hero?.id}>
            <Card
              health={hero?.health_points}
              hero_image={hero?.logo_hero}
              name={hero?.name}
              lastname={hero?.lastname}
              mana={hero?.mana}
              tavern={hero?.tavern.name}
              slug={hero?.slug}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default index;
