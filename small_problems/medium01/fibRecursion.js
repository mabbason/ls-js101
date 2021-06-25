/*
Problem
  input: positive integer
  output: fibonacci number
  rules:
    - write function, takes one param
    - output is 1 if input <= 2
    - each new fib number is result of adding the previous two numbers in the sequence
Examples
fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

Data Structure
function recursion w number formula

Algorithm
- return 1 if input is 1 or 2
- otherwise output is
  - (n - 1) + (n - 2)

CODE
    
*/


function fibonacci (num) {
    if (num === 1 || num === 2) {
      return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
  
  console.log(fibonacci(1));
  console.log(fibonacci(2));
  console.log(fibonacci(3));
  console.log(fibonacci(4));
  console.log(fibonacci(5));
  console.log(fibonacci(12));
  console.log(fibonacci(20));