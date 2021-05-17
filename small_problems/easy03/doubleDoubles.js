/*
Pseudocode
function twice(int) {
  intString = String(int)
  intLength = intString.length
  if (intLength % 2 === 0) {
    firstHalf = intString.split('').splice(intLength/2).join();
    secondHalf = intString.split('').splice(intLength/2, to the end).join();
    if (firstHalf === secondHalf) {
      return Number(firstHalf + secondHalf);
    } else {
      return int * 2;
    }
    return * 2;
  }
}
*/


function twice(int) {
  let intString = String(int);
  let intLength = intString.length;

  if (intLength % 2 === 0) {
    firstHalf = intString.split('').slice(0, (intLength / 2)).join('');
    secondHalf = intString.split('').slice(intLength / 2).join('');
    
    if (firstHalf === secondHalf) {
      return Number(firstHalf + secondHalf);
    } 
    return int * 2;
    
  }
  return int * 2;
  
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676