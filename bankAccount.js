
class BankAccount {
  constructor() {
    this.balance = 0
  }

  deposit(amount) {
    this.balance += amount
    return amount
  }

  withdraw() {
    
  }

  displayBalance() {
    return this.balance
  }
}

module.exports = BankAccount;