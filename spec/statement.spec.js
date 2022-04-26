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
  describe('printStatement()', () => {
    let statement;

    beforeEach(() => {
      // lets create a new instance of a BankAccount for each test
      statement = new Statement();
    })

    it('should not raise an error when printStatement is called', () => {
      expect(statement.printStatement()).not.toThrowError
    })

    it('should print the correct column headings', () => {
      const amount = 1000;
      const credit = 'credit';
      const debit = '';
      const date = '10/01/2022'

      statement.logActivity(amount, credit, debit, date);

      // lets mock the console log function so we can test if it receives the correct information such as date, credit, debit and balance
      console.log = jest.fn();

      statement.printStatement();
      
      // first time console log is called in this test
      expect(console.log.mock.calls[0][0]).toEqual('date || credit || debit || balance')
    })

  })

});