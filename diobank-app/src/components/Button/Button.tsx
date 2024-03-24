import { Center } from "@chakra-ui/react";

type IButtonProps = {
    title: string;
    onClick: () => void;
}

export default function Button({ title, onClick }: IButtonProps) {
    return (
        <Center bg='#7F28B5' color='#FFF' p='8px' rounded='8px'>
            <button onClick={onClick}>{title}</button>
        </Center>
    )
}
