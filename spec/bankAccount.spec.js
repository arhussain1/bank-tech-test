const BankAccount = require('../bankAccount')

describe('BankAccount', () => {
  describe('deposit()', () => {
    // lets declare a new variable for our bank account
    let bankAccount

    beforeEach(() => {
      // lets create a new instance of a BankAccount for each test
      bankAccount = new BankAccount();
    })

    it('should be able to call deposit without raising an error', () => {
      expect(bankAccount.deposit()).not.toThrow;
    }); 
  
    it('should return the amount being deposited', () => {  
      expect(bankAccount.deposit(500)).toEqual(500)
    }); 
  })
});