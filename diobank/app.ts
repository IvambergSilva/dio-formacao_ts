import { CompanyAccount } from "./class/CompanyAccount";
import { SavingsAccount } from "./class/SavingsAccount";

const companyAccount = new CompanyAccount('AeC', 4);
companyAccount.getBalance();

companyAccount.deposit(100);
companyAccount.getBalance();

companyAccount.withdraw(10);
companyAccount.getBalance();

companyAccount.getLoan(3000)
companyAccount.getBalance();

companyAccount.withdraw(300);
companyAccount.getBalance();

console.log('-----------------');

const savingsAccount = new SavingsAccount('Ivamberg', 10);

savingsAccount.getBalance();
savingsAccount.deposit(200);
savingsAccount.getBalance();
savingsAccount.withdraw(300);
savingsAccount.withdraw(200);
savingsAccount.getBalance();
