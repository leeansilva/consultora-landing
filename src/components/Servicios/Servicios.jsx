import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Servicios() {
    return (
        <>
            <Card boxShadow={'xl'} align='center' bg={'gray.800'} border={'1px solid'} borderColor={'purple.800'} color={'white'}>
                <CardHeader>
                    <Heading textAlign={'center'} size='lg'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text textAlign={'center'}>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='purple'>Ver</Button>
                </CardFooter>
            </Card>

            <Card boxShadow={'xl'} padding={'20px'} align='center' bg={'gray.800'} border={'1px solid'} borderColor={'purple.800'} color={'white'}>
                <CardHeader>
                    <Heading textAlign={'center'} size='lg'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text textAlign={'center'}>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='purple'>Ver</Button>
                </CardFooter>
            </Card>

            <Card boxShadow={'xl'} align='center' bg={'gray.800'} border={'1px solid'} borderColor={'purple.800'} color={'white'}>
                <CardHeader>
                    <Heading textAlign={'center'} size='lg'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text textAlign={'center'}>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='purple'>Ver</Button>
                </CardFooter>
            </Card>
        </>
    )
}
