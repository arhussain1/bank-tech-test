const BankAccount = require('../../bankAccount')

describe('A user using this software', () => {

  it('should produce the correct statement after using the account', () => {
    const bankAccount = new BankAccount();
    // our tests will pass today but not tomorrow, lets mock Date to prevent that.
    const mockGetDate = jest.spyOn(Date.prototype, 'getDate').mockImplementation(() => { return 15 })
    const mockGetMonth = jest.spyOn(Date.prototype, 'getMonth').mockImplementation(() => { return 1 })
    const mockGetFullYear = jest.spyOn(Date.prototype, 'getFullYear').mockImplementation(() => { return 2022 })

    // lets deposit 2000
    bankAccount.deposit(2000);

    // lets deposit another 1000
    bankAccount.deposit(1000);

    // lets withdraw 500
    bankAccount.withdraw(500);

    // lets define what we want the output to be
    const header = 'date || credit || debit || balance\n'
    const transaction1 = '15/01/2022 ||  || 500.00 || 2500.00\n'
    const transaction2 = '15/01/2022 || 1000.00 ||  || 3000.00\n'
    const transaction3 = '15/01/2022 || 2000.00 ||  || 2000.00'

    //console.log(bankAccount.printStatement())
    // now lets test it produce a correctly formatted statement
    // note the tests wont because printStatement() doesn't return anything so we need to spy on console log
    const logSpy = jest.spyOn(console, 'log');

    bankAccount.printStatement()

    expect(logSpy).toHaveBeenCalledWith(header+transaction1+transaction2+transaction3)
  })


})