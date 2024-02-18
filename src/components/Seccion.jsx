import { Box, Container } from '@chakra-ui/react'
import React from 'react'

export default function Seccion({children, bg}) {
  return (
    <Box borderTop={'1px solid var(--chakra-colors-blue-700)'} bg={bg} paddingBlock={10} >
        <Container maxW={'6xl'}>
        {children}
        </Container>
    </Box>
  )
}
