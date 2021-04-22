/* Pseudocode Workup:
Assume valid for any year greater than year 0
isLeapYear(year) = true if...
 year is evenly divisible by 4
 unless year also evenly divisible by 100, then isLeapYear(year) = false
 unless year also evenly divisible by 400, then isLeapYear(year) = true

*/

function isLeapYear(year) {
  return (year % 4 === 0) && ((year % 400 === 0) || !(year % 100 === 0));
}

let testCases = [2016, 2015, 2100, 2400, 240000, 240001, 
2000, 1900, 1752, 1700, 1, 100, 400];

for (let i = 0; i < testCases.length; i +=1) {
  console.log(isLeapYear(testCases[i]));
}