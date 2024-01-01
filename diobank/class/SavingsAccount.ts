import { Account } from "./Account";

export class SavingsAccount extends Account {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }
    
    deposit(amount: number): void {
        if(this.getStatus()) {
            this.setBalance(amount + 10)
            console.log(`Voce depositou R$ ${amount} reais e ganhou mais R$ 10.`);
        }
    }
}