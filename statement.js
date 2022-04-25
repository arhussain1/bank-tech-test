class Statement {
  constructor() {
    this.activityLog = []
  }

  logActivity(amount, credit = '', debit = '') {
    this.activityLog.push({amount: amount, credit: credit, debit: debit})
  }
}

module.exports = Statement;