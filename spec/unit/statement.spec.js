const Statement = require('../../statement')

describe(Statement, () => {

  describe('createStatement()', () => {
    let statement;

    // lets create some transactions to use for our tests
    const transaction1 = { balance: 2000, credit: 2000, debit: '', date: '15/01/2022' }
    const transaction2 = { balance: 3000 , credit: 1000, debit: '', date: '15/01/2022' }
    const transaction3 = { balance: 2500, credit: '', debit: 500, date: '15/01/2022' }


    beforeEach(() => {
      // lets create a new instance of a BankAccount for each test
      statement = new Statement();
    })

    it('should not raise an error when createStatement is called', () => {
      const activityLog = [transaction1, transaction2, transaction3]

      expect(statement.createStatement(activityLog)).not.toThrowError
    })

    it('should generate an array containing all required information for printing statements', () => {
      const activityLog = [transaction1]

      expect(statement.createStatement(activityLog)).toEqual(['date || credit || debit || balance', '15/01/2022 || 2000.00 ||  || 2000.00'])
    })

    it('should generate an array with the most recent to the left', () => {
      const activityLog = [transaction1, transaction2]

      expect(statement.createStatement(activityLog)).toEqual(['date || credit || debit || balance', '15/01/2022 || 1000.00 ||  || 3000.00', '15/01/2022 || 2000.00 ||  || 2000.00'])
    })

  })
});