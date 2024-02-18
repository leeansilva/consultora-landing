import React from 'react'
import { Box, Container, HStack, VStack, Flex, Text, Link, Image } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box w={'full'} bg={'blackAlpha.600'} paddingBlock={'20px'}>
            <Container maxW={'6xl'} h={'inherit'}>
                <HStack h={'inherit'} color={'white'} justify={'space-between'} alignItems={'self-start'} paddingBlock={'20px'}>
                    <VStack w={'400px'}  alignItems={'flex-start'}>
                        <Text fontSize={'2xl'}>LO PIBE</Text>
                        <Text>Somos una empresa de tecnología especializada en el desarrollo de soluciones a medida. Ofrecemos un servicio integral abarcando todos los aspectos necesarios para lograr el éxito de los proyectos.</Text>
                    </VStack>
                    <VStack w={'200px'}>
                        <Text>Sitemap</Text>
                        <Link>Inicio</Link>
                        <Link>Nosotros</Link>
                        <Link>Servicios</Link>
                    </VStack>
                    <VStack w={'200px'} alignItems={'flex-end'}>
                        <Text>Contacto</Text>
                        <Link>Inicio</Link>
                        <Link>Nosotros</Link>
                        <Link>Servicios</Link>
                    </VStack>
                    
                </HStack>

                <hr />
                <HStack justifyContent={'space-between'} alignContent={'center'} paddingBlock={'20px'} color={'white'}>
                        <Box>
                            <Text fontSize={{ base: "13px", md: "13px", lg: '1.2rem' }}>© 2023 asdads, Inc. Todos los derechos reservados.</Text>
                        </Box>
                        <HStack >
                            <Link target='_blank' width={'fit-content'} margin={0} href="https://api.whatsapp.com/send/?phone=%2B541135654619&text=Hola+NSB%2C+me+interesan+los+servicios+que+ofrecen%2C+puntualmente+quisiera+m%C3%A1s+informaci%C3%B3n+sobre+...+&type=phone_number&app_absent=0" mr={2}>
                                <Image width={8} height={8} margin={0}  src={'/logos/whatsapp.svg'} alt='whatsapp' />
                            </Link>
                            <Link target='_blank' href="mailto:leeansilva@gmail.com">
                                <Image width={8} height={8} margin={0} src={'/logos/mail.svg'} alt='mail' />
                            </Link>
                        </HStack>

                    </HStack>
            </Container>
        </Box>
    )
}
