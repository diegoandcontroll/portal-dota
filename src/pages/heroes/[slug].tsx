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
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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
interface Tavern {
  id: string;
  name: string;
  tavern_url: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: any;
}
interface RootObjectTavern {
  id: string;
  name: string;
  lastname: string;
  slug: string;
  description: string;
  logo_hero: string;
  animate_hero: string;
  main_attribute: string;
  agility: string;
  force: string;
  intelligence: string;
  health_points: number;
  mana_points: number;
  createdAt: Date;
  updatedAt: Date;
  skills: Skill[];
  tavern: Tavern;
}
const index = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const [hero, setHero] = useState<RootObjectTavern>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    try {
      const fecthHero = async () => {
        setIsLoading(true);
        const response = await api.get(`/heroes/hero/${slug}`);
        const data = await response.data;
        setHero(data);
      };
      fecthHero();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [slug]);
  hero?.skills?.map((skill) => console.log(skill));
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

          <GridItem w="100%" ml={48}>
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
                <Th>Taverna</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  {' '}
                  <chakra.span fontSize="12">
                    {hero?.main_attribute}
                  </chakra.span>
                </Td>
                <Td>
                  <chakra.span fontSize="12">{hero?.agility}</chakra.span>
                </Td>
                <Td>
                  <chakra.span fontSize="12">{hero?.force}</chakra.span>
                </Td>
                <Td>
                  <chakra.span fontSize="12">{hero?.intelligence}</chakra.span>
                </Td>
                <Td isNumeric>
                  <chakra.span fontSize="12">{hero?.health_points}</chakra.span>
                </Td>
                <Td isNumeric>
                  <chakra.span fontSize="12">{hero?.mana_points}</chakra.span>
                </Td>
                <Td>
                  <chakra.span fontSize="12">{hero?.tavern?.name}</chakra.span>
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
