import React from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Seccion from "./components/Seccion"
import { Box } from "@chakra-ui/react"
function App() {
  
  const [scrollPosition, setScrollPosition] = React.useState('blackAlpha.400');
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = Math.ceil(
        (scrollTop / (scrollHeight - clientHeight)) * 100
    );
    setScrollPosition(position > 5 ? "blackAlpha.400" : "transparent" )
};

  return (
    <Box as='div' h={'100vh'} id="page" 
    overflow={'auto'}
    // onWheel={e => console.log(window.scrollY)} 
    onScroll={handleScroll}>
      <Header bg={scrollPosition}/>
      <Hero/>
      <Seccion>aa</Seccion>
    </Box>
  ) 
}

export default App
