const Statement = require('./statement')

class BankAccount {
  constructor(statement = new Statement) {
    this.balance = 0
    this.statement = statement
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

  sendActivity(amount) {
    this.statement.logActivity(amount)
  }
}

module.exports = BankAccount;