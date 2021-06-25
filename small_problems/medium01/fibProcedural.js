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

function fibonacci (nth) {
    let fibArr = [1, 1];
    let fibNum = fibArr[fibArr.length - 1];
    
    for (let num = 2; num < nth; num += 1 ) {
      fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
      fibNum = fibArr[fibArr.length - 1];
    }
    
    return fibNum;
    }
    
    
    console.log(fibonacci(1));
    console.log(fibonacci(2));
    console.log(fibonacci(3));
    console.log(fibonacci(4));
    console.log(fibonacci(5));
    console.log(fibonacci(50));
    console.log(fibonacci(75));