/*
**Problem
input: number (year)
output: string (century)
rules:
  Explicit:
    - return a string
      - begins with century number
      - ends with appropriate 'st', 'nd', 'rd', 'th'
  Implicit:
    - input year AD, eg a positive number
    - no future year limit, must account for hundreds of centuries from now

**Examples
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

- Think in blocks of 100, eg, 0-100, 101-200, 201-300
- Take the last three digits off and round them up to the nearest 100
  - eg. 101 rounds to 200, 978 to 1000
  - maybe in practice... take the year and divide it by 100
    then round up to the nearest integer
- Append the correct ordinal reference
  1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th, 10th
  11th, 12th, 13th, 14th, 15th, ...
  21st, 22nd, 23rd, 24th, 25th, ...
  31st, 32nd, 33rd, 34th, 35th, ...
  - The pattern is number ending in 1 = st, 2 = nd, 3 = rd, 4 - 0 = th
  - EXCEPT for 11, 12, 13, they also use 'th'

**Data Structure

**Algorithm
- create a function named century that takes a year argument
- create century variable by divide year by 100 and round up to nearest integer
- analyze the ending of that number to assign the correct ordinal reference
  - figure out if the ending is 11, 12, 13
  - else use 1, 2, 3, 4 to assign correct reference
- combine the century number with the correct oridnal reference
- return the result as a string

**Code

*/

function century(year) {
  let centuryNumStr = String(Math.ceil(year/100));
  let ordinalRef; 

  if(is11Thru13(centuryNumStr)) {
    ordinalRef = 'th';
  } else {
    switch(centuryNumStr.slice(-1)) {
      case '1':
        ordinalRef = 'st';
        break;
      case '2':
        ordinalRef = 'nd';
        break;
      case '3':
        ordinalRef = 'rd';
        break;
      default:
        ordinalRef = 'th';
        break;
    }
  }
  return centuryNumStr + ordinalRef;
}

function is11Thru13(centuryNum) {
  let lastTwoNums = Number(centuryNum.slice(-2));
  return (lastTwoNums >= 11 && lastTwoNums <= 13);
}


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"