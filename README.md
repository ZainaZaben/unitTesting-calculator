# Unit Testing Project For A Simple Calculator
A simple calculator function that performs basic arithmetic operations: addition, subtraction, multiplication, and division, with support for handling multiple numbers and special cases like division by zero and invalid inputs. This project follows Test-Driven Development (TDD) and adheres to the AAA pattern for writing unit tests.

## Project Features
1. Basic Operations: Addition, subtraction, multiplication, and division.
2. Handles Multiple Inputs: The calculator can handle an unknown number of inputs.
3. Error Handling: Dividing by zero throws an error. Invalid operators and input types are handled.
4. Input Constraints: Numbers larger than 1000 are ignored in calculations (e.g., 2 + 1001 = 2).
5. 100% Test Coverage: All possible cases are covered using unit tests with thorough validation.

## Prerequisites
1. Node.js installed
2. npm (Node Package Manager)

## Steps to clone the repository and generate code coverage using npm::
1. Clone the GitHub Repository:
```git clone https://github.com/Rahaf-Mansour/unitTesting-calculator.git```
2. Install Dependencies: ```cd unitTesting-calculator``` then 
 ``` npm install ```
3. Run Unit Tests: ```npm test```
4. Generate Code Coverage: ```npm run coverage```

## Project Requierments:

1. Create a simple calculator function.
2. You need to pass these test cases, it is important to properly implement the calc function.
```js
// calculator.test.js
const calc = require('./calculator');

describe('Calculator', () => {
  // Test case: Addition
  it('should return the correct sum of two numbers', () => {
    expect(calc(2, '+', 3)).toBe(5);
  });

  // Test case: Subtraction
  it('should return the correct difference of two numbers', () => {
    expect(calc(5, '-', 2)).toBe(3);
  });

  // Test case: Multiplication
  it('should return the correct product of two numbers', () => {
    expect(calc(4, '*', 6)).toBe(24);
  });

  // Test case: Division
  it('should return the correct quotient of two numbers', () => {
    expect(calc(10, '/', 2)).toBe(5);
  });

  // Test case: Division by zero
  it('should throw an error when dividing by zero', () => {
    expect(() => calc(6, '/', 0)).toThrow('Division by zero');
  });

  // Test case: Negative numbers
  it('should handle negative numbers correctly', () => {
    expect(calc(-8, '+', 5)).toBe(-3);
  });

  // Test case: Decimal numbers
  it('should handle decimal numbers correctly', () => {
    expect(calc(3.5, '*', 2)).toBe(7);
  });

  // Test case: Order of operations
  it('should follow the correct order of operations', () => {
    expect(calc(2, '+', 3, '*', 4)).toBe(14);
  });

  // Test case: Invalid operator
  it('should throw an error for an invalid operator', () => {
    expect(() => calc(5, '$', 3)).toThrow('Invalid operator');
  });

  // Test case: Invalid input type
  it('should throw an error for invalid input types', () => {
    expect(() => calc('2', '+', 3)).toThrow('Invalid input type');
  });
});
```

3. To enhance the test coverage and ensure thorough testing, add additional test cases.
It is advised to intentionally make these new test cases fail initially. This approach allows for more robust validation of the calc function implementation. Once the new test cases fail, proceed with implementing the necessary changes in the calc function to make them pass.
   
4. Allow calc to handle an unknown amount of numbers.
5. Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2

   
## Take A Look:
![npm test](https://github.com/user-attachments/assets/47c9b696-91be-4168-8dbe-4560db87c040)

![npm run coverage](https://github.com/user-attachments/assets/c37bb754-99ee-4862-8040-5ca464fe5d14)

