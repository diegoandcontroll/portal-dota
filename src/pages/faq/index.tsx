/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { Box, Flex, Heading, chakra } from '@chakra-ui/react';
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
      <Flex justify="center" align="center">
        <Box>
          <Heading fontWeight="thin" textAlign="center" fontSize="1xl">
            Clique para saber as FAQs do dotA
          </Heading>
        </Box>
        <Box ml="6">
          <img
            src="	http://www.portaldota.com.br/imagens/heros/90_hero_anim.gif "
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
            <Heading cursor="pointer" className="dropdown-label" fontSize="18">
              {item.title}
            </Heading>

            <chakra.p fontSize="14" pl="2" pt="2">
              {item.content}
            </chakra.p>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default index;
