/*
function oddities(array) {
  create blankArray
  iterate through adding 2 to iterator each loop
  push element [i] into  blankArray each loop
  return blankArray
}
*/
let oddities = (array) => {
  let oddElements = [];
  for (let index = 0; index < array.length; index += 2) {
    oddElements.push(array[index]);
  }
  return oddElements;
};


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []