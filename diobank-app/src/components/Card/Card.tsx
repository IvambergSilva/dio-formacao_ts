import { Box, Center, ChakraProvider, Flex, Heading, Input } from '@chakra-ui/react'
import Header from '../Header/Header';
import Button from '../Button/Button';
import { BoasVindas } from '../../services/login/login';

export default function Card() {
    return (
        <Box minH='100vh' bg='#7F28B5'>
            <Flex align='center' justify='center' h='100vh'>
                <Box bg={'#FFF'} rounded='15px' p='15px' gap='20px' w='80%'>
                    <Header />
                    <Center>
                        <Heading size='lg' color='#7F28B5'>Faça o Login</Heading>
                    </Center>
                    <Input placeholder='Digite o seu email' type='email' m='10px 0' />
                    <Input placeholder='Digite a sua senha' type='password' m='10px 0' />
                    <Button title={'Entrar'} onClick={() => BoasVindas('Ivamberg')} />
                </Box>
            </Flex>
        </Box>
    )
}
