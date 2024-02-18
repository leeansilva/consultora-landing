import { Box, Container } from '@chakra-ui/react'
import React from 'react'

export default function Seccion({children}) {
  return (
    <Box paddingBlock={10} >
        <Container maxW={'6xl'}>
        {children}
        </Container>
    </Box>
  )
}
