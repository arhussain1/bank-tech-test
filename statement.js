class Statement {
  constructor() {
    this.activityLog = []
  }

  logActivity(transaction, date = this.#formattedDate()) {
    this.activityLog.push({balance: transaction.balance, credit: transaction.credit, debit: transaction.debit, date: date})
  }

  printStatement() {
    let array = ['date || credit || debit || balance']

    this.activityLog.forEach(transaction => {
      const balance = this.#formatMoney(transaction.balance)
      const credit = this.#formatMoney(transaction.credit)
      const debit = this.#formatMoney(transaction.debit)

      const string = `${transaction.date} || ${credit} || ${debit}|| ${balance}`
      array.push(string);
    })

    console.log(array.join('\n'))
    return (array.join('\n'))
  }

  // private methods
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

  #formatMoney(num) {
    if (typeof num == "number") {
      return num.toFixed(2)
    } else {
      return num
    }
  }
}

module.exports = Statement;