/*
Same as previous excercise, but descending order
*/


let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let arrSorted = arr.map( subArr => {
  let sortedSubArr;
  
  if(typeof subArr[0] === 'number') {
    sortedSubArr = [...subArr].sort((a, b) => {
      return Number(b) - Number(a);
    });    
  } else {
    sortedSubArr = [...subArr].sort().reverse();
  }
  return sortedSubArr;
});

console.log(arrSorted);
console.log(arr);