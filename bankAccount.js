const Statement = require('./statement')

class BankAccount {
  constructor(statement = new Statement) {
    this.balance = 0
    this.statement = statement
  }

  deposit(amount) {
    this.balance += amount
    const transactionInformation = {balance: this.balance, credit: amount, debit: ''}
    this.sendActivity(transactionInformation)
  }

  withdraw(amount) {
    if (this.balance <= amount) throw('Not enough money, please add funds')
    this.balance -= amount 

    const transactionInformation = {balance: this.balance, credit: '', debit: ''}
    this.sendActivity(transactionInformation)
  }

  displayBalance() {
    return this.balance
  }

  printStatement() {
    this.statement.printStatement();
  }

  sendActivity(transactionInformation) {
    this.statement.logActivity(transactionInformation)
  }
}

module.exports = BankAccount;