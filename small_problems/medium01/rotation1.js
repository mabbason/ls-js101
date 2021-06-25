/*
Problem:
  input: array
  output: new array
  rules:
    explicit
    - write a function
    - does NOT mutate the original array
    - moves the first element to the end of the array
    - if input is an empty array, return an empty array
    - if input is NOT an array, return undefined
    
    implicit
    - if no argument passed, then undefined
    - value of element does not matter
    - only shallow rotation (do not concern with content of nested objects)
  
  
Examples:
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

Data Structure
array

Algorithm
- write function rotateArray(), one parameter
- initiate guard clause if the argument is NOT an array, return undefined
- else
  - copy the parameter array EXCEPT for index 0 to new array
  - copy index 0 of parameter into the end of new array
  - return new array

CODE
*/

function rotateArray(arr) {
    if (!Array.isArray(arr)) return undefined;
    
    let rotatedArr = arr.slice(1);
    if (arr[0]) {
      rotatedArr.push(arr[0]);
    }
   
    return rotatedArr;
  }
  
  console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
  console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
  console.log(rotateArray(['a']));                    // ["a"]
  console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
  console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
  console.log(rotateArray([])); 