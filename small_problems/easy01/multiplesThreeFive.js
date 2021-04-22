/*
Pseudocode Workup:
assume function is passed an integer greater than 1
function sumOfMultiples(int){
  maybe initialize an empty array to push multiples into
  start at int in a loop and run a test to see if each 
  int is multiple of 3 or 5 (int % 5 === 0 || int % 3 === 0)
  once true then test to make sure int is not already in array
  decrement loop until === 1

  Then iterate through array and add each element to the previous
  result, return the final result
}
*/

function multisum(int) {
  let sumArray = [];
  for (let i = int; i >= 1; i -= 1) {
    if ((i % 5 === 0) || (i % 3 === 0)) {
      if (!sumArray.includes(i)) {
        sumArray.push(i);
      } else {
        continue;
      }
      
    } else {
    continue;
    }
  }
  let multisum = 0;
  sumArray.forEach(multiple => {
    multisum = multiple + multisum;
  });
  return multisum;
}

// Test cases
console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));