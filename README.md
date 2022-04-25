## Bank tech test

### What am I doing?/What are my goals?

For this project I will be attempting my first tech test, the task is to design a simple software to manage a users bank account, it should be able to handle deposits and withdrawals and also printing an account statement. 

In addition, the main goal of this exercise is to practice creating professional quality code which displays my OO (object oriented) design abilities i.e. my ability to plan out what classes, methods I need and how they will interact with eachother. Also, to show my ability to use TDD (Test Driven Development) to drive the creation of classes and methods to produce well tested code.

#### The requirements for this project are listed below:

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

#### The acceptance criteria is:
**Given** a client makes a deposit of 1000 on 10-01-2023
**And** a deposit of 2000 on 13-01-2023
**And** a withdrawal of 500 on 14-01-2023
**When** she prints her bank statement
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

### How to install this software?
**Fill this section out with what to clone(this repo) and what to run to get the necessary dependencies(npm install or bundle install)**

### How to run this software?
**Fill this section out by telling the user how to use your application**
- is it a command line tool (does it have an interface)
- Or is it a software that needs to be run in irb (this is most likely our case)
- Fill the rest out with how to use the different methods ideally show some code snippet examples of how to use the code.

### Running tests
**Fill this section with a quick guide on how to run tests**
- For example if your using ruby, navigate to the project directory and run RSpec


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
This user story requires the user to be able to desposit money into their bank account.

Notes: 
  - try to test for behaviour over state

- [ ] begin by setting up your repository with the required dependencies
- [ ] then create a test to expect calling the method deposit on a bank account object to not raise an error