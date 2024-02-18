import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Servicios() {
    return (
        <>
            <Card boxShadow={'xl'} align='center'>
                <CardHeader>
                    <Heading textAlign={'center'} size='lg'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text textAlign={'center'}>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue'>Ver</Button>
                </CardFooter>
            </Card>

            <Card boxShadow={'xl'} padding={'20px'} align='center'>
                <CardHeader>
                    <Heading textAlign={'center'} size='lg'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text textAlign={'center'}>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue'>Ver</Button>
                </CardFooter>
            </Card>

            <Card boxShadow={'xl'} align='center'>
                <CardHeader>
                    <Heading textAlign={'center'} size='lg'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text textAlign={'center'}>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue'>Ver</Button>
                </CardFooter>
            </Card>
        </>
    )
}
