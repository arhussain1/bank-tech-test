const BankAccount = require('../bankAccount')
const Statement = require('../statement')
jest.mock('../statement');

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

    it('should minus the amount being withdrawn from the account', () => {
      //add 500 to the account
      bankAccount.deposit(500);

      //withdraw 200 from the account
      bankAccount.withdraw(200)

      //expect the remaining amount to be 300
      expect(bankAccount.displayBalance()).toEqual(300)
    }); 

    it('should receive an error when trying to withdraw more than the available balance', () => {
      //add 500 to the account
      bankAccount.deposit(500);
      expect(() => bankAccount.withdraw(600)).toThrow('Not enough money, please add funds')
    }); 
  })

  describe('printStatement()', () => {
    let bankAccount;
    const mockStatement = new Statement();
    const returnedArray1 = ['date || credit || debit || balance']
    
    beforeEach(() => {
      jest.resetAllMocks();
      // lets create a new instance of a BankAccount for each test
      bankAccount = new BankAccount(mockStatement);
      mockStatement.createStatement.mockImplementation(() => returnedArray1)
    })

    it('should be able to call printStatement without raising an error', () => {
      expect(bankAccount.printStatement()).not.toThrow;
    });

    it('should call createStatement() on the statement class', () => {
      jest.resetAllMocks();

      const mockCreateStatement = jest
        .spyOn(Statement.prototype, 'createStatement')
        .mockImplementation(() => {
          return returnedArray1
        })

      bankAccount.printStatement();

      expect(mockCreateStatement).toHaveBeenCalled()
    });

    it('should print the correct column headings', () => {
      const logSpy = jest.spyOn(console, 'log');
      bankAccount.printStatement();

      expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance')
    })

    it('should print statement information correctly for one transaction', () => {
      jest.resetAllMocks();
      const returnedArray2 = ['date || credit || debit || balance', '10/01/2022 || 1000.00 ||  || 1000.00']
      mockStatement.createStatement.mockImplementation(() => returnedArray2)

      const logSpy = jest.spyOn(console, 'log');

      bankAccount.printStatement();
      expect(logSpy).toHaveBeenCalledWith('date || credit || debit || balance\n10/01/2022 || 1000.00 ||  || 1000.00')
    })
  })
});