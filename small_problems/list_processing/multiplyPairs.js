/*
problem:
  input: two arrays (length could vary)
  output: single array sorted
  rules:
    - multiply each number in one array by each number in other array
    - returned array sorted ascending
    - assume neither arg is an empty array

Examples:
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

Data Structure
array

Algorithm
- create function multiplyAllPairs w two params
- multiply each pair and push product to result array
  - only if result arr doesnt contain product result already
- sort the result arr, ascending
- return sorted arr

CODE
*/

function multiplyAllPairs (arr1, arr2) {
    let products = [];
    arr1.forEach(arr1Num => {
      arr2.forEach( arr2Num => {
        products.push(arr1Num * arr2Num);
      });
    }); 
    return products.sort((a, b) => a - b);
  }
  
  
  console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    
  // [2, 4, 4, 6, 8, 8, 12, 16])