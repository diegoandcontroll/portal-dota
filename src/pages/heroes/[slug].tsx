/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spinner,
  chakra,
  TableContainer,
  Table,
  Thead,
  Tr,
  Tbody,
  Th,
  Td,
} from '@chakra-ui/react';
import Head from 'next/head';

import { api } from '../../services/api';
interface Skill {
  id: string;
  name: string;
  hotkey: string;
  icon: string;
  area_attack: boolean;
  type_hability: string;
  type_target: string;
  description: string;
  level_1: string;
  level_2: string;
  level_3: string;
  level_4: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function getServerSideProps({ params }: any) {
  const response = await api.get(`heroes/hero/${params.slug}`);
  const data = await response.data;

  return {
    props: {
      hero: data,
    },
  };
}
const index = ({ hero }: any) => {
  const isLoading = false;
  return (
    <>
      <Flex as="main" p="4" color="white" ml="12" overflowX="hidden">
        <Head>
          <title>{hero?.lastname}</title>
        </Head>
        <Grid templateColumns="repeat(5, 1fr)" gap={12}>
          <GridItem w="100%">
            {isLoading ? (
              <Spinner bg="gray.100" />
            ) : (
              <img src={hero?.animate_hero} alt={hero?.name} />
            )}
          </GridItem>
          <GridItem w="50%" />
          <GridItem w="100%">
            <Heading textAlign="center" fontSize="18">
              {hero?.name}
            </Heading>
            <Heading textAlign="center" fontSize="18">
              {hero?.lastname}
            </Heading>
          </GridItem>

          <GridItem w="100%" ml={48} mt="8">
            {isLoading ? (
              <Spinner bg="gray.100" />
            ) : (
              <img src={hero?.logo_hero} alt={hero?.name} />
            )}
          </GridItem>
        </Grid>
      </Flex>
      <Flex
        as="main"
        p="4"
        color="white"
        ml="12"
        justifyContent="flex-start"
        align="center"
      >
        <Box display="flex" flexDirection="column">
          <Heading textAlign="center" pb="4">
            História
          </Heading>
          <chakra.p fontSize="16">{hero?.description}</chakra.p>
        </Box>
      </Flex>
      <Flex
        as="main"
        p="4"
        color="white"
        ml="12"
        justifyContent="center"
        align="center"
      >
        <Heading textAlign="center" pb="4">
          Stats
        </Heading>
      </Flex>
      <Flex
        as="main"
        p="4"
        color="white"
        justifyContent="center"
        align="center"
        ml="12"
      >
        <TableContainer overflowX="hidden">
          <Table>
            <Thead>
              <Tr>
                <Th>Atributo principal</Th>
                <Th>Agilidade</Th>
                <Th>Força</Th>
                <Th>Inteligência</Th>
                <Th isNumeric>Pontos de vida</Th>
                <Th isNumeric>Pontos de Mana</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  {' '}
                  <chakra.span fontSize="12" textAlign="center">
                    <chakra.img src={hero?.main_attribute} />
                  </chakra.span>
                </Td>
                <Td>
                  <chakra.span fontSize="12" textAlign="center">
                    {hero?.agility}
                  </chakra.span>
                </Td>
                <Td>
                  <chakra.span fontSize="12" textAlign="center">
                    {hero?.force}
                  </chakra.span>
                </Td>
                <Td>
                  <chakra.span fontSize="12" textAlign="center">
                    {hero?.intelligence}
                  </chakra.span>
                </Td>
                <Td isNumeric>
                  <chakra.span fontSize="12" textAlign="center">
                    {hero?.health_points}
                  </chakra.span>
                </Td>
                <Td isNumeric>
                  <chakra.span fontSize="12" textAlign="center">
                    {hero?.mana_points}
                  </chakra.span>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Flex
        as="main"
        p="4"
        color="white"
        ml="12"
        justifyContent="center"
        align="center"
      >
        <Heading textAlign="center" pb="4">
          Habilidades
        </Heading>
      </Flex>
      <Flex
        as="main"
        p="4"
        color="white"
        justifyContent="center"
        align="center"
        ml="12"
      >
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Icon</Th>
                <Th>Tecla de atalho</Th>
                <Th>Ataque em área</Th>
                <Th>Tipo da habilidade</Th>
                <Th>Descrição</Th>
              </Tr>
            </Thead>
            <Tbody>
              {hero?.skills?.map((skill: Skill) => (
                <Tr key={skill?.id}>
                  <Td>
                    <img src={skill?.icon} alt="" />
                  </Td>
                  <Td>{skill?.hotkey}</Td>
                  <Td>{skill?.area_attack ? 'Sim' : 'Não'}</Td>
                  <Td>{skill?.type_hability}</Td>
                  <Td>
                    <chakra.span fontSize="12">
                      {skill?.description}
                    </chakra.span>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
};

export default index;
