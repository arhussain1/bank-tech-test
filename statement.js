class Statement {
  constructor() {
  }

  createStatement(activityLog) {
    const header = ['date || credit || debit || balance']
    const body = this.#createStatementBody(activityLog)

    const organisedArray = header.concat(body.reverse())
    return organisedArray
  }

  // private methods
  #createStatementBody(activityLog) {
    const body = activityLog.map(transaction => {
      const balance = this.#formatMoney(transaction.balance)
      const credit = this.#formatMoney(transaction.credit)
      const debit = this.#formatMoney(transaction.debit)

      return `${transaction.date} || ${credit} || ${debit} || ${balance}`
    })
    return body
  }

  #formatMoney(num) {
    if (typeof num == "number") return num.toFixed(2)
    return num
  }
}

module.exports = Statement;