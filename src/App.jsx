import React from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Seccion from "./components/Seccion"
import { Box, Button, HStack, Image, Text } from "@chakra-ui/react"
import Servicios from "./components/Servicios/Servicios"
import Footer from "./components/Footer/Footer"

function App() {

  const [scrollPosition, setScrollPosition] = React.useState('blackAlpha.400');
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
      (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    setScrollPosition(position > 5 ? "blackAlpha.700" : "blue.700")
  };

  return (
    <Box as='div' id="page"
      h={'100svh'}
      overflow={'auto'}
      onScroll={handleScroll}
    >
      <Header bg={scrollPosition} />
      <Hero />

      <Seccion bg={'blue.800'}>
        <Text pt={'50px'} textAlign={'center'} color={'white'} fontSize={'5xl'} fontWeight={800}>Servicios On-demand</Text>
        <Text mb={'50px'} textAlign={'center'} color={'white'} fontSize={'2xl'} fontWeight={200}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque fugiat explicabo cum repell </Text>

        <HStack pb={'50px'} gap={'60px'} flexDir={{ base: 'column', md: 'row' }} >
          <Servicios />
        </HStack>
      </Seccion>

      <Seccion bg={'blue.800'}>
        <HStack gap={'60px'} p={'50px 0'}>
          <Box>
            <Image borderRadius={'10px'} src='https://blog.rapiboy.com/wp-content/uploads/2021/09/rapiboy-linkedin-como-incrementar-ventas-tienda-online-1024x505.jpg'></Image>
          </Box>
          <Box>
            <Text color={'white'} fontSize={'5xl'} fontWeight={800}>Mas falopa</Text>
            <Text color={'white'} fontSize={'5xl'} fontWeight={800}>E-COMMERCE</Text>
            <Text mb={'50px'} color={'white'} fontSize={'2xl'} fontWeight={200}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium atque fugiat explicabo cum repell </Text>
            <Button>Hablemos</Button>
          </Box>
        </HStack>
      </Seccion>

      <Seccion>Carrousel acá</Seccion>
      <Footer />
    </Box>
  )
}

export default App
