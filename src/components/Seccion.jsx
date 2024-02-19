import { Box, Container } from '@chakra-ui/react'
import React from 'react'

export default function Seccion({children, bg}) {
  return (
    <Box bg={bg} paddingBlock={10} zIndex={2}>
        <Container maxW={'6xl'}>
        {children}
        </Container>
    </Box>
  )
}
