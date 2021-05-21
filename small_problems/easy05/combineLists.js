/*
PROBLEM
  input: two separate arrays, each the same length
  output: one flat array
  rules:
    EXPLICIT
    - write a function that takes two args, each an array
    - combine both args into one flat array
      - the result array will be ordered:
      [arr1 element 0, then arr2 element 0
        arr1 element 1, then arr2 element 1, ...] // alternating from each input array
    - each input array is not empty, and each is the same length.

    IMPLICIT
    - the type of values do not matter
  
  Questions:
  1. Does it matter from which array the result array is ordered first?
  2. Is one of the original arrays being returned, or does it matter?
  3. Are either of the two input arrays meant to be unmodified?

EXAMPLES
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

DATA STRUCTURE
Array

ALGORITHM
- create function interleave, it takes two array args
- create empty result array
- add the first element from arr1 to result array
- then add the first element from arr2 to result array
- then add the second element from arr1
- then the second element from arr2
- and so on
- continue until the input arrs have been iterated through
- return the result arr

CODE
*/
function interleave(arr1, arr2) {
  let comboArr = []; 
  let inputArrLength = arr1.length;
  let indexComboArr = 0;
  let indexInputArr = 0;

  do{
    comboArr[indexComboArr] = arr1[indexInputArr];
    indexComboArr += 1;
    comboArr[indexComboArr] = arr2[indexInputArr];
    indexComboArr += 1;
    indexInputArr += 1;
  } while(indexInputArr < inputArrLength);

  return comboArr;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"])