// Estudos de testes

export const sum = (numA: number, numB: number): number => {
    return numA + numB;
}

export const multiply = (numA: number, mult: number): number | string => {
    return mult === 2 || mult === 3
        ? numA * mult
        : 'Multplicador não aceito';
}