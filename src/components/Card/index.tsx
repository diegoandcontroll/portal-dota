/* eslint-disable jsx-a11y/alt-text */
import {
  Heading,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react';
import Link from 'next/link';
interface CardProps {
  name: string;
  lastname: string;
  slug: string;
  health: number;
  tavern: string;
  mana: number;
  hero_image: string;
}
export default function Card({
  slug,
  name = 'Jhon Doe',
  lastname = 'Doe Jhon',
  health = 230,
  mana = 230,
  tavern = 'Agility',
  hero_image = 'http://www.portaldota.com.br/imagens/heros/36_hero_pna.jpg',
}: CardProps) {
  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        pb="4"
      >
        <Image
          h={'150px'}
          w={'full'}
          src={
            'https://preview.redd.it/kn9c35sjf04z.jpg?auto=webp&s=8fe3eeb0111790bdfc324558b58591788a87e56d'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-8}>
          <chakra.img src={hero_image} />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {name}
            </Heading>
            <Text color={'white'}>{lastname}</Text>
            <Text color={'white'}>
              <chakra.span color="gray.100">Taverna:</chakra.span> {tavern}
            </Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{mana}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Pontos de mana
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{health}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Pontos de vida
              </Text>
            </Stack>
          </Stack>
          <Link href={`/heroes/${slug}`}>
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              Detalhes do hero
            </Button>
          </Link>
        </Box>
      </Box>
    </Center>
  );
}
