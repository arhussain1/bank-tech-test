class Statement {
  constructor() {
    this.activityLog = []
  }

  logActivity(amount, credit = '', debit = '', date = this.#formattedDate()) {
    this.activityLog.push({amount: amount, credit: credit, debit: debit, date: date})
  }

  printStatement() {
    console.log('date || credit || debit || balance')
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