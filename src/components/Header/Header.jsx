import React from 'react'
import { Box, Container, HStack, VStack, Flex, Text, Link } from '@chakra-ui/react'
export default function Header({bg}) {

    return (
        <Box as='header' w={'full'} h={'80px'} bg={bg} pos={'sticky'} top={0}>
            <Container as={'nav'} maxW={'6xl'} h={'inherit'}>
                <HStack h={'inherit'} justifyContent={'space-between'} color={'white'}>
                    <Text fontSize={'2xl'}>UI</Text>

                    <HStack>
                        <Link>Inicio</Link>
                        <Link>Nosotros</Link>
                        <Link>Servicios</Link>
                        <Link>Contacto</Link>
                    </HStack>
                </HStack>
            </Container>
        </Box>

    )
}