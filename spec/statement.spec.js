const Statement = require('../statement')

describe(Statement, () => {
  describe('deposit()', () => {
    // lets declare a new variable for our bank account
    let statement;

    beforeEach(() => {
      // lets create a new instance of a BankAccount for each test
      statement = new Statement();
    })

    it('should be able to call logActivity without raising an error', () => {
      const transaction = {balance: 200, credit: 200, debit: ' '}

      expect(statement.logActivity(transaction)).not.toThrow;
    });  

    it('should log the activity for a deposit transaction', () => {
      const transaction = {balance: 200, credit: 200, debit: ' '}
      statement.logActivity(transaction);

      expect(statement.activityLog[0].balance).toEqual(200.00)
      expect(statement.activityLog[0].credit).toEqual(200.00)
      expect(statement.activityLog[0].debit).toEqual(' ')
    });

    it('should log the activity for a withdrawal transaction', () => {
      const transaction = {balance: 200, credit: ' ', debit: 200}

      statement.logActivity(transaction);

      expect(statement.activityLog[0].balance).toEqual(200.00)
      expect(statement.activityLog[0].credit).toEqual(' ')
      expect(statement.activityLog[0].debit).toEqual(200.00)
    });  

    it('should log the date any time logActivity is called', () => {
      const transaction = {balance: 200, credit: ' ', debit: 200}
      const date = '10/04/2022'

      statement.logActivity(transaction, date);
      
      expect(statement.activityLog[0].date).toEqual('10/04/2022')
    })

  })

  describe('createStatement()', () => {
    let statement;

    beforeEach(() => {
      // lets create a new instance of a BankAccount for each test
      statement = new Statement();
    })

    it('should not raise an error when createStatement is called', () => {
      expect(statement.createStatement()).not.toThrowError
    })

    it('should generate an array containing all required information for printing statements', () => {
      const transaction = {balance: 1000.00, credit: 1000.00, debit: ''}
      const date = '10/01/2022'

      statement.logActivity(transaction, date);

      expect(statement.createStatement()).toEqual(['date || credit || debit || balance', '10/01/2022 || 1000.00 ||  || 1000.00'])
    })

    it('should generate an array with the most recent to the left', () => {
      const transaction1 = {balance: 1000.00, credit: 1000.00, debit: ''}
      const date1 = '10/01/2022'
      const transaction2 = {balance: 600.00, credit: '', debit: 400}
      const date2 = '15/01/2022'

      statement.logActivity(transaction1, date1);
      statement.logActivity(transaction2, date2);

      expect(statement.createStatement()).toEqual(['date || credit || debit || balance','15/01/2022 ||  || 400.00 || 600.00', '10/01/2022 || 1000.00 ||  || 1000.00'])
    })

  })
});