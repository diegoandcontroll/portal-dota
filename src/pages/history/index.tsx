/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Flex, Heading, Image, chakra } from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import autoAnimate from '@formkit/auto-animate';
const index = () => {
  const [show, setShow] = useState(true);
  const [showSecond, setShowSecond] = useState(true);
  const [showThird, setShowThird] = useState(true);
  const parent = useRef(null);
  const parentSecondDiv = useRef(null);
  const parentThirdDiv = useRef(null);
  useEffect(() => {
    parent.current && autoAnimate(parent.current);
    parentSecondDiv.current && autoAnimate(parentSecondDiv.current);
    parentThirdDiv.current && autoAnimate(parentThirdDiv.current);
  }, [parent, parentSecondDiv, parentThirdDiv]);

  const reveal = () => setShow(!show);
  const revealSecond = () => setShowSecond(!showSecond);
  const revealThird = () => setShowThird(!showThird);
  return (
    <Box as="main" p="4" color="white" ml="12">
      <Head>
        <title>History</title>
      </Head>
      <Flex justify="center" align="center" flexDirection="column">
        <Box py="2">
          <Heading fontWeight="thin" textAlign="center" fontSize="3xl">
            Conheça a história do dotA
          </Heading>
        </Box>

        <Box mt="6">
          <Image
            src="https://images8.alphacoders.com/473/473438.jpg"
            w="full"
            h="380"
            borderRadius="8"
          />
        </Box>
      </Flex>
      <Flex
        justify="flex-start"
        align="center"
        py="6"
        flexDirection="column"
        ref={parent}
      >
        <Box>
          <Heading
            fontWeight="thin"
            textAlign="start"
            fontSize="3xl"
            py="4"
            className="dropdown-label"
            onClick={reveal}
            cursor="pointer"
          >
            O Início
          </Heading>
        </Box>
        {show && (
          <Box className="dropdown-content">
            <chakra.p fontSize="18">
              Se voltássemos a 2003 encontraríamos o lançamento do jogo de PC
              Warcraft III como o mais esperado do ano. Não por causa dos
              gráficos, bem modestos para a época, mas graças a jogabilidade,
              uma mistura de estratégia, RPG e ação. Havia ainda um diferencial
              inédito: a possibilidade de editar os mapas do jogo, o que o
              tornava divertido mesmo quando finalizado, sempre tendo algo novo
              criado pela comunidade de players para se jogar.
            </chakra.p>
          </Box>
        )}
      </Flex>

      <Flex
        justify="flex-start"
        align="center"
        py="6"
        flexDirection="column"
        ref={parentSecondDiv}
      >
        <Box>
          <Heading
            fontWeight="thin"
            textAlign="start"
            fontSize="3xl"
            py="4"
            cursor="pointer"
            onClick={revealSecond}
          >
            Dota mapa de Warcraft III até o Mod Defense Of The Ancients
          </Heading>
        </Box>
        {showSecond && (
          <>
            <Box>
              <chakra.p fontSize="18">
                Foi assim que nasceu o primeiro MOBA (Multiplayer Online Battle
                Arena) da história dos games:{' '}
                <chakra.a
                  color="yellow.200"
                  cursor="pointer"
                  fontSize="16"
                  href="https://pt.wikipedia.org/wiki/Defense_of_the_Ancients"
                  target="_blank"
                  textDecoration="underline"
                >
                  Defense Of The Ancients
                </chakra.a>
                , DotA. A princípio DotA era apenas um mod (modificação de jogo
                criada por fãs) básico de mapa criado por um usuário dos fóruns
                da Blizzard chamado Eul, que acabou desistindo do projeto mas
                deixou o código aberto para quem quisesse continuá-lo.
              </chakra.p>
            </Box>
            <Box py="4">
              <Image
                src="https://gadarf.com/downloads/cenario-dota-allstars.jpg"
                w="full"
                borderRadius="8"
              />
            </Box>

            <Box>
              <chakra.p fontSize="18">
                Foram criados vários mods baseados em DotA, que já era por si só
                um mod. Um dos que se destacou, o DotA All Star, que foi
                desenvolvido até a edição 6.0 por outro usuário da Blizzard,
                chamado de Guinsoo. Após essa edição o famoso IceFrog se tornou
                o responsável por criar novos conteúdos, corrigir bugs,
                aperfeiçoar a experiência do jogador e balancear o jogo.
              </chakra.p>
            </Box>

            <Box py="4" borderRadius="4">
              <Image
                src="https://gadarf.com/downloads/batalha-em-dota1.jpg"
                w="full"
                borderRadius="8"
              />
            </Box>

            <Box>
              <chakra.p fontSize="18">
                IceFrog, ao contrário dos outros desenvolvedores de DotA, sabia
                do potencial do jogo mesmo sendo apenas um mod. Então investiu o
                que pôde para torná-lo mais acessível, criando um site do DotA
                All Star com tutoriais e downloads. IceFrog é um nome muito
                importante para o DotA porquê sem ele o jogo não teria
                encontrado o equilíbrio (poucos bugs e habilidades dos heróis
                balanceadas) e nem a divulgação necessária para se espalhar por
                computadores do mundo todo até virar um fenômeno.
              </chakra.p>
            </Box>
          </>
        )}
      </Flex>

      <Flex
        justify="center"
        align="center"
        flexDirection="column"
        mt="2"
        ref={parent}
      >
        <Box py="2" cursor="pointer" onClick={revealThird}>
          <Heading fontWeight="thin" textAlign="center" fontSize="3xl">
            O mapa de dotA e suas estratégias
          </Heading>
        </Box>

        {showThird && (
          <>
            <Box mt="4">
              <chakra.p fontSize="18">
                O mapa de DotA é dividido ao meio por um rio. De cada lado fica
                uma equipe e uma base. Para chegar a base do inimigo é preciso
                destruir três poderosas torres que ficam no caminho. Esses
                caminhos são chamadas de “Lane” e existem três: mid (a do meio),
                bot (a de baixo) e top ( a de cima). Cada Lane tem suas 3 torres
                no percurso até a base.
              </chakra.p>
            </Box>

            <Box py="4">
              <Image
                src="https://gadarf.com/downloads/mapa-dota-exemplo.jpg"
                w="full"
                borderRadius="8"
              />
            </Box>

            <Box mt="4">
              <chakra.p fontSize="18">
                Além da torres existem creeps, digamos que são tropas
                controladas por AI com o objetivo de destruir a torre dos
                inimigos. São bem fracas comparadas com os Heróis que
                controlamos, mas ajudam muito durante o jogo. Além dos creeps de
                cada lado existem os creeps “neutros”, que são criaturas que
                ficam em locais específicos nas florestas do mapa.
              </chakra.p>
            </Box>

            <Box mt="4">
              <chakra.p fontSize="18">
                Os creeps neutros são diversos e dão experiência e dinheiro
                diferentes entre si. Há um creep especial, o Roshan, esse é bem
                poderoso, é preciso estratégia ou alto lvl para matá-lo, a
                recompensa além de experiência e dinheiro é o Imortal (Aegis),
                um item que permite que você volte ao jogo no local exato onde
                morreu sem perda de experiência ou dinheiro. Pode parecer
                confuso agora, mas jogando vocês entenderão o que estou dizendo.
              </chakra.p>
            </Box>

            <Box mt="4">
              <chakra.p fontSize="18">
                O objetivo do jogo é destruir o “ancient” inimigo, que está no
                meio da base rival! O jogador pode escolher entre mais de 100
                heróis, cada um com habilidades especiais, numa equipe de até
                cinco pessoas. A diversidade de heróis possibilita também uma
                infinidade de estratégias, por isso DotA é um jogo muito
                competitivo. E foi assim, a partir desse primeiro mod de
                Warcraft III que DotA se desenvolveu até se tornar o jogo que
                conhecemos hoje.
              </chakra.p>
            </Box>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default index;
