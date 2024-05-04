/* Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.*/

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.error("Deposit amount must be positive.");
            return;
        }
        this.balance += amount;
        console.log(`Deposited $${amount.toFixed(2)}. New balance: $${this.balance.toFixed(2)}`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.error("Withdrawal amount must be positive.");
            return;
        }
        if (amount > this.balance) {
            console.error(`Insufficient funds. Current balance: $${this.balance.toFixed(2)}`);
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew $${amount.toFixed(2)}. New balance: $${this.balance.toFixed(2)}`);
    }
}

// Create bank account instances
const account1 = new BankAccount(123456, 1000.00);
const account2 = new BankAccount(654321, 500.00);

// Deposit some money
account1.deposit(500.00);
account2.deposit(200.00);

// Withdraw a portion of it
account1.withdraw(250.00);
account2.withdraw(100.00);
