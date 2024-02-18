import React from 'react'
import { Box, Container, HStack, VStack, Flex, Text, Link,Center } from '@chakra-ui/react'
export default function Hero() {
  return (
    <Box h={'100svh'} bg={'blue.700'} pt={'10px'}>
        <Container maxW={'6xl'}>
            <Center>
                <HStack color={'white'}>
                    <Box>
                    <Text fontSize={'6xl'} fontWeight={800}>Tecnologia On-Demand</Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Tempore quod quam minima voluptate cumque, 
                        pariatur magnam fugiat odio vitae necessitatibus 
                        iste sed animi obcaecati atque aliquid, 
                        repudiandae at? Sit, exercitationem?
                    </Text>
                    </Box>
                    <Box></Box>
                </HStack>
            </Center>
        </Container>
    </Box>
  )
}
