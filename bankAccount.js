
class BankAccount {
  constructor() {
    this.balance = 0
  }

  deposit(amount) {
    this.balance += amount
    return amount
  }

  withdraw(amount) {
    if (this.balance <= amount) throw('Not enough money, please add funds')
    this.balance -= amount 
  }

  displayBalance() {
    return this.balance
  }
}

module.exports = BankAccount;