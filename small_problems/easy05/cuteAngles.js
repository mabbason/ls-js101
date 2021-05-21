/*
Problem
  Input: number(float)
  Output: string
  Rules:
    Explicit
    - ?? need to validate the input? less than 360
    - convert the float number to deg, min, sec
      - use the proper symbol for each when outputting
    
    Implicit
    - the degs may have 1-3 digits
    - the mins and secs MUST each have two digits
    
Example
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

- if the input is an integer, then just concatenate that w correct strings
- 76.73
  --> break off whole num portion for degrees
  --> multiply 0.73 * 60 to get 43.8 again break off whole num portion for mins
  --> multiply 0.8 * 60 to get 48 for secs (if float, then round to 2 digits)

Data Structure

Algorithm
- create dms function, takes float number as input
- if the number is an integer then just output that directly w correct notation
- if the number is float then save the whole number portion as deg value
- subtract the deg portion and multiply the remaining float  by 60
  - save the whole number portion as mins value
- subtract the secs value and multiply the remaining float by 60
  - round the result to an integer and save as the secs value
- return the concatenation of degValue + degSymbol + minValue + minSymbol + secValue + secSymbol

Code

*/
const DEG_SYMBOL = '\xB0';
const MIN_SEC_CONV_FACTOR = 60;

function dms(degNum) {
let degs = degNum;
let mins = 0;
let secs = 0;

if(!Number.isInteger(degNum)) {
  degs = Math.trunc(degNum);
  let minsFull = (degNum - degs) * MIN_SEC_CONV_FACTOR;
  mins = Math.trunc(minsFull);
  secs = Math.round((minsFull - mins) * MIN_SEC_CONV_FACTOR);
}

mins = String(mins).padStart(2, '0');
secs = String(secs).padStart(2, '0');

return `${degs}${DEG_SYMBOL}${mins}'${secs}"`;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0.0567));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
