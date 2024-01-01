import { Account } from "./Account";

export class CompanyAccount extends Account {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan(loanAmount: number): void {
        if (this.getStatus()) {
            this.setBalance(loanAmount)
            console.log(`Pegou um emprestimo de ${loanAmount}.`);
        }
    }
}