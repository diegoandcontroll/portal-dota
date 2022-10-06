/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

import Card from '../../components/Card';
import { api } from '../../services/api';

export async function getServerSideProps() {
  const response = await api.get('/heroes');
  const data = await response.data;

  return {
    props: {
      heroes: data?.items,
    },
  };
}

const index = ({ heroes }: any) => {
  const [pageNumber, setPageNumber] = useState(0);
  const moviesPerPage = 6;
  const pagesVisited = pageNumber * moviesPerPage;
  const displayHeroes = heroes
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((hero: any) => (
      <GridItem w="100%" key={hero?.id}>
        <Card
          health={hero?.health_points}
          hero_image={hero?.logo_hero}
          name={hero?.name}
          lastname={hero?.lastname}
          mana={hero?.mana}
          tavern={hero?.tavern.name.split(
            'Intelligence ' || 'Strength ' || 'Agility '
          )}
          slug={hero?.slug}
        />
      </GridItem>
    ));
  const pageCount = Math.ceil(heroes.length / moviesPerPage);
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  return (
    <Box as="main" p="4" color="white" ml="12">
      <Head>
        <title>Heroes</title>
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
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={12}>
        {displayHeroes}
      </Grid>
      <Flex justifyContent="flex-end" align="center">
        <Box style={{ marginTop: '2rem' }}>
          <ReactPaginate
            previousLabel={'🡰'}
            nextLabel={'🡲'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBttns'}
            previousLinkClassName={'previousBttn'}
            nextLinkClassName={'nextBttn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default index;
