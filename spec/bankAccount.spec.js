const BankAccount = require('../bankAccount')

describe('BankAccount', () => {
  describe('deposit()', () => {
    // lets declare a new variable for our bank account
    let bankAccount;

    beforeEach(() => {
      // lets create a new instance of a BankAccount for each test
      bankAccount = new BankAccount();
    })

    it('should be able to call deposit without raising an error', () => {
      expect(bankAccount.deposit()).not.toThrow;
    });  

    it('should desposit 500 into the account', () => {
      bankAccount.deposit(500);
      expect(bankAccount.displayBalance()).toEqual(500)
    })
  })

  describe('displayBalance()', () => {
    let bankAccount;

    beforeEach(() => {
      // lets create a new instance of a BankAccount for each test
      bankAccount = new BankAccount();
    })

    it('should be able to call displayBalance without raising an error', () => {
      expect(bankAccount.displayBalance()).not.toThrow;
    }); 

    it('a new bank account should have a balance of 0', () => {
      expect(bankAccount.displayBalance()).toEqual(0);
    }); 
  })

  describe('withdraw()', () => {
    let bankAccount;

    beforeEach(() => {
      // lets create a new instance of a BankAccount for each test
      bankAccount = new BankAccount();
    })

    it('should be able to call withdraw without raising an error', () => {
      expect(bankAccount.withdraw()).not.toThrow;
    }); 
  })
});