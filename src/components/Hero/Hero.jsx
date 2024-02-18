import React from 'react'
import { Box, Container, HStack, VStack, Flex, Text, Link, Center, Image, Button } from '@chakra-ui/react'
export default function Hero() {
    return (
        <Box h={'100svh'} bg={'gray.800'} pt={'70px'} pb={'70px'}>
            <Container maxW={'6xl'}>
                <Center>
                    <HStack flexDir={{ base: 'column', md: 'row' }} color={'white'}>
                        <Box>
                            <Text fontSize={'7xl'} fontWeight={800}>Diseño web</Text>
                            <Text color={'purple.500'} fontSize={'7xl'} fontWeight={800}>100% a medida.</Text>
                            <Text padding={'20px 0'} fontSize={'2xl'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Tempore quod quam minima voluptate cumque,
                                pariatur magnam fugiat odio vitae necessitatibus
                            </Text>
                            <Button colorScheme='purple'>Contactanos</Button>
                        </Box>

                        <Box>
                            <Image borderRadius={'10px'} src='https://acuabit.es/wp-content/uploads/2021/12/responsive-diseno.png'></Image>
                        </Box>
                    </HStack>
                </Center>
            </Container>
        </Box>
    )
}
