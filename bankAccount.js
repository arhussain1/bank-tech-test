const Statement = require('./statement')

class BankAccount {
  constructor(statement = new Statement()) {
    this.balance = 0
    this.statement = statement;
    this.activityLog = []
  }

  deposit(amount) {
    this.balance += amount
    const transactionInformation = {balance: this.balance, credit: amount, debit: ''}
    this.#logActivity(transactionInformation)
  }

  withdraw(amount) {
    if (this.balance <= amount) throw('Not enough money, please add funds')
    this.balance -= amount 

    const transactionInformation = {balance: this.balance, credit: '', debit: amount}
    this.#logActivity(transactionInformation)
  }

  printStatement() {
    const data = this.statement.createStatement(this.activityLog);
    console.log(data.join('\n'))
  }

  getDate() {
    return this.#formattedDate()
  }

// private methods

  #logActivity(transaction, date = this.#formattedDate()) {
    this.activityLog.push({balance: transaction.balance, credit: transaction.credit, debit: transaction.debit, date: date})
  }

  #makeTwoDigits(num) {
    return num.toString().padStart(2, 0)
  }

  #formattedDate(date = new Date()) {
    const dd = this.#makeTwoDigits(date.getDate())
    const mm = this.#makeTwoDigits(date.getMonth())
    const yyyy = date.getFullYear()

    const dateString = `${dd}/${mm}/${yyyy}`
    return dateString
  }
}

module.exports = BankAccount;