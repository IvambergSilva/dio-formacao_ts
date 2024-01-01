export abstract class Account {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    };

    deposit(amount: number): void {
        if (this.validateStatus()) {
            this.balance += amount;
            console.log(`Voce depositou R$ ${amount} reais.`);
        }
    };

    withdraw(amount: number): void {
        if (this.validateStatus()) {
            if (this.balance >= amount) {
                this.balance -= amount
                console.log(`${this.name} sacou R$ ${amount}`)
            } else {
                console.log("Saldo insuficiente!")
            }
        }
    };

    setBalance(currentBalance: number): void {
        this.balance += currentBalance
    }

    getBalance(): void {
        if (this.validateStatus()) {
            console.log(`Saldo atual: R$ ${this.balance}`);
        }
    };

    private validateStatus(): boolean {
        if (!this.status) {
            console.log('Conta Invalida');
        }

        return this.status;
    }

    getStatus(): boolean {
        return this.status
    }
}