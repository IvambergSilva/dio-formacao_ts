import { BoasVindas } from "./login"

describe('BoasVindas', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        BoasVindas('Ivamberg');
        expect(mockAlert).toHaveBeenCalledWith('Seja bem vindo, Ivamberg!');
    })
})