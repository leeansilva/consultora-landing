// @ts-nocheck
import { Box, Center, Flex, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react'

export default function Carousel() {
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "calc(50% - 20px)",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "white",
        fontWeight: "bold",
        fontSize: "40px",
        transition: "0.4s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
            opacity: 0.8,
            bg: "blue.500",
        },
    };
    const slides = [
        {
            img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        },
        {
            img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
            img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
    ];
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const slidesCount = slides.length;

    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const setSlide = (slide) => {
        setCurrentSlide(slide);
    };

    const SLIDES_INTERVAL_TIME = 3000;
    const ANIMATION_DIRECTION = "right";

    React.useEffect(() => {

        const automatedSlide = setInterval(() => {
            ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
        }, SLIDES_INTERVAL_TIME);
        return () => clearInterval(automatedSlide);
    }, [slidesCount]);

    const carouselStyle = {
        transition: "all 1s cubic-bezier(.3,.2,.23,.99)",
        ml: `-${currentSlide * 100}%`,
    };
    return (
        <Flex
            w="full"
            bg="#edf3f8"
            _dark={{ bg: "#3e3e3e", }}
            
            alignItems="center"
            justifyContent="center"
        >
            <Flex w="full" overflow="hidden" pos="relative">
                <Flex h="400px" w="full" {...carouselStyle}>
                    {slides.map((slide, sid) => (
                        <Box key={`slide-${sid}`} boxSize="full" flex="none" bg={'gray'}>
                            {/* <Text
                                color="white"
                                fontSize="xs"
                                p="8px 12px"
                                pos="absolute"
                                top="0"
                            >
                                {sid + 1} / {slidesCount}
                            </Text> */}

                            <Center w={'full'} h={'full'}>
                            <Text fontSize={'6xl'}>Mandale contenido</Text>
                            </Center>
                            {/* <Image
                                src={slide.img}
                                alt="carousel image"
                                boxSize="full"
                                backgroundSize="cover"
                            /> */}
                        </Box>
                    ))}
                </Flex>
                <Text {...arrowStyles} left="0" onClick={prevSlide}>&#10094;</Text>
                <Text {...arrowStyles} right="0" onClick={nextSlide}>&#10095;</Text>
                <HStack justify="center" pos="absolute" bottom="8px" w="full" gap={1}>
                    {
                        Array.from({ length: slidesCount, }).map((_, slide) => (
                            <Box
                                key={`dots-${slide}`}
                                cursor="pointer"
                                boxSize={["5px", null, "10px"]}
                                m="0 2px"
                                bg={currentSlide === slide ? "whiteAlpha.800" : "whiteAlpha.500"}
                                rounded="50%"
                                display="inline-block"
                                transition="background-color 0.6s ease"
                                _hover={{
                                    bg: "whiteAlpha.800",
                                }}
                                onClick={() => setSlide(slide)}
                            ></Box>
                        ))}
                </HStack>
            </Flex>
        </Flex>
    );
}
