## Bank tech test

### What am I doing?/What are my goals?

For this project I will be attempting my first tech test, the task is to design a simple software to manage a users bank account, it should be able to handle deposits and withdrawals and also printing an account statement. 

In addition, the main goal of this exercise is to practice creating professional quality code which displays my OO (object-oriented) design abilities i.e. my ability to plan out what classes, methods I need and how they will interact with each other. Also, to show my ability to use TDD (Test Driven Development) to drive the creation of classes and methods to produce well tested code.

#### The requirements for this project are listed below:

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

#### The acceptance criteria is:
- **Given** a client makes a deposit of 1000 on 10-01-2023
- **And** a deposit of 2000 on 13-01-2023
- **And** a withdrawal of 500 on 14-01-2023
- **When** she prints her bank statement
- **Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```


### How to install this software?
Step 1:
  - Please clone this repo

Step 2: 
  - Install all required dependencies using the following command
  
  ``npm install``


### How to run this software?
This software requires the use of the node REPL

First ensure you have completed the steps in **How to install this software?** 

#### Setting up node
Begin by opening the node REPL by running the node command:
  
  ``node``

require the following file to load the software into the REPL
  
  ``const BankAccount = require('./bankAccount.js')``

#### Creating an account
You can create your own bank account by creating an instance of the **BankAccount** class
  
  ``const myBank = new BankAccount()``

#### displayBalance()
The ``displayBalance()`` method returns the total current balance of your account
  ```
  myBank.displayBalance()
  // expected output: 0
  ```

#### deposit()
The ``deposit()`` method is used to add money to your account
  ```
  // deposit 200 into the account
  myBank.deposit(200)

  myBank.displayBalance()
  // expected output: 200
  ```

#### withdraw()
The ``withdraw()`` method is used to remove money from your account
  ```
  // withdraw 150 from the account
  myBank.withdraw(150)

  myBank.displayBalance()
  // expected output: 50
  ```

  **note**
  you cannot withdraw an amount greater that the total balance of your account
  ```
  myBank.displayBalance()
  // expected output: 200

  myBank.withdraw(500)
  // expected output: Error 'Not enough money, please add funds'
  ```

#### printStatement()
The ``printStatement()`` method is used to print a summary of all transactions on the bank account
  ```
  myBank.displayBalance()
  // expected output: 0

  myBank.deposit(1000)
  myBank.deposit(2000)
  myBank.withdraw(500)

  myBank.printStatement()
  // expected output: 
  // date || credit || debit || balance
  // 26/03/2022 ||  || 500.00 || 2500.00
  // 26/03/2022 || 2000.00 ||  || 3000.00
  // 26/03/2022 || 1000.00 ||  || 1000.00
  ```


### Running tests
Testing for this project is done using Jest

To run tests, first ensure you have completed the steps in **How to install this software?** 

Then navigate to the project directory and run the following command:

  ``jest``


### My approach
This section details my approach to this tech test.

#### Stage 1 - Planning
I began by looking at the requirements and came up with the following general approach for this project:
  - I will be using JavaScript and Jest
  - This software will be run by loading it into Node and interacting with it by calling methods
  
I also did some basic design by mapping out what classes I would need and how they would interact: 
  - I will have a BankAccount class which is responsible for handling deposits and withdrawals
  - Instead of adding additional responsibility to the BankAccount class for handling logic for printing statements 
  I decided to extract that into another class AccountStatement which is responsible for keeping a log of deposits and 
  withdrawals and printing them to the user.

- I will not be using a database to store any information, so the data will be kept in memory for the current session only

#### Stage 2 - User Stories

I will also list my user stories so that I can easily tackle them one at a time.

**Story 1**
```
As a User

So that I can store my cash in a secure place

I want to be able to deposit cash in my bank account
```

**Story 2**
```
As a User

So that I can use money that I have save to buy things

I want to be able to withdraw cash from my bank account
```

**Story 3**
```
As a User

So that I can se a summary of my account activity

I want to be able to print a statement
```

#### Stage 3 - Completing User Story 1
This user story requires the user to be able to deposit money into their bank account.

Notes: 
  - try to test for behaviour over state

- [x] begin by setting up your repository with the required dependencies
- [x] then create a test to expect calling the method deposit on a bank account object to not raise an error
    - I passed this test by simply creating a BankAccount class with a method deposit

We still need to create the logic for our deposit method, it should update the account balance by the deposit amount
- [x] create another test which expects the deposit method to return amount of money being deposited 
    - I added a return statement that returns the amount being deposited when deposit() is called

Let's also test drive creating another method which displays the balance of the account when called:
- [x] create a test that expects calling displayBalance to not raise an error
    - I created the displayBalance method

- [x] create a test that expects a new bank account to have a balance of zero
    - I added a property of balance to the class and initialized it with a balance of zero for every new instance
    - I simply returned that value using displayBalance

Now we can use displayBalance() to complete the logic for our deposit method
- [x] create a test that deposits 500 and expects displayBalance to return 500
    - I added logic to the deposit method to increase the balance of the bank account by the amount being deposited

Final notes on this user story:
  - I am removing the need for deposit to return the amount being deposited as it is an necessary test.

#### Stage 4 - Completing user story 2
This user story requires that the user can withdraw money from his account.

To save time I am only going to list some general steps i am going to take:
  - should not raise an error when being called
  - the withdraw method should minus the amount from the balance

Edge cases:
- one edge case I came up with is, the user should be able to withdraw more than is available in their account

#### Stage 5 - Completing user story 3
This user story is slightly more complex, as it requires making a decision, is adding the responsibility of printing statements to the Bank Account class in breach of the SRP (Single Responsibility Principle). If so that would require creating a separate class and deciding how the classes will interact with each other.

In this case, I will refer back to my planning diagram, I decided that the Bank Account should only be responsible for managing the users account balance.

And the responsibility of printing the account statement will be role of a second Statement class, we can then forward the print method onto the statement class. 

I also need to store the account history, each time deposit or withdraw is called this needs to be logged somewhere using an logActivity method, I decided to keep this on the Statement class.

##### Let's begin test-driving our Statement class's logActivity method:
- It should take three parameters the amount and the action(deposit=credit or withdrawal=debit)
- It should store this information in a hash as an element in an array on the Statement instance
- Along with the amount and action information we also need the date stored as well
  - This will most likely be achieved using the Date class, we will need to mock this dependency

Added notes:
adding the date is a bit more complex as the Date class does not provide dates in dd/mm/yyyy format, so we will need to create some addition methods to format the date.
  - Create a makeTwoDigits method to add a 0 to 1 digit date numbers
  - use the Date class's getday, getMonth and getFullYear methods to format your date.
- Using dependency injection for the date object I can inject a date string in order to test that the date is being saved.

##### Now let's test drive the print statement
- It should simply iterate through each element of the activityLog array and log it to the console in the correct format
  - to test this, log a transaction using logActivity and then expect printStatement to return a string of the following format:
  ```
  'date || credit || debit || balance'
  '10/01/2023 || 1000.00 || || 1000.00'
  ```

Added notes: 
  - the logActivity method has been modified to accept a hash to reduce the number of arguments required
  - the currency values need to be formatted to 2 decimal places

Ok, so I currently have a functioning statement class that can receive activity that's occurring on the Bank Account and keep a record of it. Also, we can print statements in the correct format.

However, our printStatement class has too much responsibility, it's printing the statement to the console and also generating the statement as well. Let extract generating the statement to a CreateStatement method

#### Stage 6 - Update BankAccount class to forward commands onto the statement class
Lets start with the deposit method:
  - it should add the amount deposited to the total balance of the bank account
  - it should call upon another method whose responsibility it is to logActivity(as this method will be used by withdraw as well we should pass some arguments as well)
  - make sure to mock any external dependencies 

Do the same for the withdraw method

Finally, add print functionality to your BankAccount class which forwards to the statement classes print method
  - Ensure you mock the dependency

Final touch ups:
  - I forgot about the order in which the transactions should appear most recent at the top, I have done it the wrong way round. To fix this I will add another test to expect a particular order
  - We should also make the sendActivity method private as the user does not need access to it

