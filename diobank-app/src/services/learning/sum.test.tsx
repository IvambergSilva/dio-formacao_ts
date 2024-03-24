// Estudos de testes

import { multiply, sum } from "./sum"

describe('soma', () => {
    it('Deve somar os dois números informados', () => {
        const value = sum(2, 3);
        expect(value).toBe(5);
    });

    it('Deve multiplicar o número por 2', () => {
        const value = multiply(3, 2);
        expect(value).toBe(6);
    });

    it('Deve multiplicar o número por 3', () => {
        const value = multiply(4, 3);
        expect(value).toBe(12);
    });

    it('Deve informar um erro se o multiplicador for diferente de 2 ou 3', () => {
        const value = multiply(5, 4);
        expect(value).toBe('Multplicador não aceito')
    })
})