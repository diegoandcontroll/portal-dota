/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Flex,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react';
import autoAnimate from '@formkit/auto-animate';
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import FaqData from '../../utils/faq';

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const parent = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <Box as="main" p="4" color="white" ml="12">
      <Head>
        <title>FAQ</title>
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
            Clique na pergunta para descobrir a resposta !
          </Heading>
        </Box>
        <Box>
          <img
            src="https://res.cloudinary.com/dn64mfrfs/image/upload/v1665033782/images/heroes/51_hero_anim_ezbozs.gif"
            alt="herogif"
          />
        </Box>
      </Flex>

      <Flex
        justify="flex-start"
        align="flex-start"
        py="4"
        direction="column"
        ref={parent}
      >
        {FaqData.map((item) => (
          <Box key={item.id} py="4">
            <Popover>
              <PopoverTrigger>
                <Heading fontSize="14" cursor="pointer">
                  {item.title}
                </Heading>
              </PopoverTrigger>
              <PopoverContent
                backgroundColor="gray.600"
                style={{ backgroundColor: '#4A5568' }}
              >
                <PopoverArrow />
                <PopoverCloseButton pl="6" />
                <PopoverHeader color="gray.200" style={{ color: '#E2E8F0' }}>
                  {item.title}
                </PopoverHeader>
                <PopoverBody color="gray.200" style={{ color: '#E2E8F0' }}>
                  {item.content}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default index;
