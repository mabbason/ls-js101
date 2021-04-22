/*
Write a function that takes two strings as arguments, determines 
the length of the two strings, and then returns the result of 
concatenating the shorter string, the longer string, and the 
shorter string once again. You may assume that the strings are 
of different lengths.

Pseudocode Workup:
only writing function shortLongShort( takes two args string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2
  } else { can assume different lengths
    return string1 + string2 + string1
  }
}
heck that's almost exactly the function...
*/

function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    return string1 + string2 + string1;
  } else {
    return string2 + string1 + string2;
  }
}