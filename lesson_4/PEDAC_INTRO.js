// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

/*
Problem and Examples
input: string
output: array
rules:
  Explicit requirements:
    - Palindromes are case sensitive; Dad would NOT be considered a palindrome
    - ALL palindromes should be extracted as their own elements, 
    even if they are part of another longer palindrome or word
  Implicit requirements:
    - Upon finding no palindromes the result should be an empty array
    - An empty string should result in an emport array

Data Structure: array
// Algorithm:
//  - declare a result variable and initialize it to an empty array
//  - create an array named substrArray that contains all of the
//    substrings of the input string that are at least 2 characters long.
//  - loop through the words in the substrArray array.
//  - if the word is a palindrome, append it to the result
//    array
//  - return the result array

*/