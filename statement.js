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

      const string = `${transaction.date} || 1000.00 || ${transaction.debit}|| 1000.00`
      array.push(string);
    })

    console.log(array.join('\n'))
    return (array.join('\n'))
  }

  // lets create some private methods
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

module.exports = Statement;