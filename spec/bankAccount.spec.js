const BankAccount = require('../bankAccount')

describe('BankAccount', () => {
  it('should be able to call deposit without raising an error', () => {
    const bankAccount = new BankAccount();

    expect(bankAccount.deposit()).not.toThrow;
  }); 
});