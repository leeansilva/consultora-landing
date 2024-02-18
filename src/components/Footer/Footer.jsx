import React from 'react'
import { Box, Container, HStack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box w={'full'} h={'80px'} bg={'blackAlpha.600'}>
            <Container maxW={'6xl'} h={'inherit'}>
                <HStack h={'inherit'} justifyContent={'space-between'} color={'white'}>
                    <Text fontSize={'2xl'}>FOOTER</Text>
                    <HStack justifyContent={'space-between'} alignContent={'center'}>
                        <Box>
                            <Text fontSize={{ base: "13px", md: "13px", lg: '1.2rem' }}>© 2023 asdads, Inc. Todos los derechos reservados.</Text>
                        </Box>
                        <HStack >
                            <Link target='_blank' width={'fit-content'} margin={0} href="https://api.whatsapp.com/send/?phone=%2B541135654619&text=Hola+NSB%2C+me+interesan+los+servicios+que+ofrecen%2C+puntualmente+quisiera+m%C3%A1s+informaci%C3%B3n+sobre+...+&type=phone_number&app_absent=0" mr={2}>
                                <Image width={8} height={8} margin={0} src={'public/logos/whatsapp.svg'} alt='whatsapp'/>
                            </Link>
                            <Link target='_blank' href="mailto:leeansilva@gmail.com">
                                <Image width={8} height={8} margin={0} src={'public/logos/mail.svg'} alt='mail' />
                            </Link>
                        </HStack>

                    </HStack>
                </HStack>
            </Container>
        </Box>
    )
}
