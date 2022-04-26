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
      expect(statement.logActivity()).not.toThrow;
    });  

    it('should log the activity for a deposit transaction', () => {
      const amount = 200;
      const credit = 'credit';
      const debit = '';
      statement.logActivity(amount, credit, debit);

      expect(statement.activityLog[0].amount).toEqual(200)
      expect(statement.activityLog[0].credit).toEqual('credit')
      expect(statement.activityLog[0].debit).toEqual('')
    });

    it('should log the activity for a withdrawal transaction', () => {
      const amount = 200;
      const credit = '';
      const debit = 'debit';
      statement.logActivity(amount, credit, debit);

      expect(statement.activityLog[0].amount).toEqual(200)
      expect(statement.activityLog[0].credit).toEqual('')
      expect(statement.activityLog[0].debit).toEqual('debit')
    });  

    it('should log the date any time logActivity is called', () => {
      const amount = 200;
      const credit = '';
      const debit = 'debit';
      const date = '10/04/2022'

      statement.logActivity(amount, credit, debit, date);
      
      expect(statement.activityLog[0].date).toEqual('10/04/2022')
    })
  })
});