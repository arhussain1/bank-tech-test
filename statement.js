class Statement {
  constructor() {
  }

  createStatement(activityLog) {
    const header = ['date || credit || debit || balance']
    let body = []

    activityLog.forEach(transaction => {
      const balance = this.#formatMoney(transaction.balance)
      const credit = this.#formatMoney(transaction.credit)
      const debit = this.#formatMoney(transaction.debit)

      const string = `${transaction.date} || ${credit} || ${debit} || ${balance}`
      body.push(string);
    })

    const organisedArray = header.concat(body.reverse())

    return organisedArray
  }

  // private methods

  #formatMoney(num) {
    if (typeof num == "number") return num.toFixed(2)
    return num
  }
}

module.exports = Statement;