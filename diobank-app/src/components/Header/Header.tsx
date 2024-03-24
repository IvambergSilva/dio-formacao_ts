import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Header({ children }: any) {
    return (
        <header>
            <Flex direction='column' align='center' mb='25px'>
                <Heading size='xl' color='purple'>DioBank</Heading>
                <Text fontWeight='600' as='i'>O banco feito para você</Text>
            </Flex>
            {children}
        </header>
    )
}
