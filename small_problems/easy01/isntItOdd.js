/*Problem:
    function(integer arg positive neg or zero... but can assume int) {
        find absolute value, look for Math.abs type of thing
        test if even or odd with % !== 0
      -----> returns true if abs value of intArg is odd
      or returns false if abs value of intArg is even
    } 

  Example cases: 
    2, 5, -17, -8, 0, 7
  
  Data Structure:
    N/A??? simple pass argument
  Algorithm:
    I'm not sure how it applies here either
  Code w Intent

*/

function isOdd(integer) {
  return Math.abs(integer) % 2 !== 0;
}

// Copied test cases from problem assignment
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

// Program passes at test cases successfully