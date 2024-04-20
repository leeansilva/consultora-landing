import React from 'react'
import { Box, Container, HStack, VStack, Flex, Text, Link } from '@chakra-ui/react'
export default function Header({bg}) {

    return (
        <Box zIndex={2} transition={'0.2s'} as='header' w={'full'} h={'80px'} bg={bg} pos={'sticky'} top={0}>
            <Container as={'nav'} maxW={'6xl'} h={'inherit'}>
                <HStack h={'inherit'} justifyContent={'space-between'} color={'white'}>
                    <Text fontSize={'2xl'}>UI</Text>

                    <HStack>
                        <Link fontSize={'xl'}>Inicio</Link>
                        <Link fontSize={'xl'}>Nosotros</Link>
                        <Link fontSize={'xl'}>Servicios</Link>
                        <Link fontSize={'xl'}>Contacto</Link>
                    </HStack>
                </HStack>
            </Container>
        </Box>

    )
}