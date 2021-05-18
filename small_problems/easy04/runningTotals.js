/*Pseudocode
function runningTotal(numArr) {
  let newArr;
  iterate through numArr{
    might need to do if(i === 0) condition
    otherwise newArr.push(numArr[i] + newArr[i-1])
    }
  return newArr;
}

*/

function runningTotal(numArr) {
  let numTotal = numArr.slice(0,1);

  for(let i = 1; i < numArr.length; i += 1) {
    numTotal.push(numArr[i] + numTotal[i - 1]);
  }
  return numTotal;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []