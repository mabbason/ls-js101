/*Question 1 
Write three different ways to remove all of the elements from the following array:
*/
let numbers = [1, 2, 3, 4];
numbers = [];
numbers.splice(0, numbers.length);
numbers.length = 0;
//oh I like the pop() method, not as concise but it feels fun for some reason

/*Question 2 
What will the following code output
console.log([1, 2, 3] + [4, 5]);
*/
//I want to say it will return undefined because I think I tried this on one
//of the practice questions. One array (regardless of length, values contained, etc)
//will return undefined because the value of an array is undefined. The question
//is trying to get tricky with concatenating two undefined values I believe.
//bummer... I was wrong. I didn't take into consideration implicit coercion.

/*Question 3
What will the following code output?
*/
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1)
//They are primitives, thus immutable, thus logs "hello there"

/*Question 4
What will the following code output?
*/
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
//slice() is a non-destructive method i believe so it should log the 
//originally defined arr1. If it was let arr2 = arr1; that would be different
/*Ugh, I forgot that slice only does a shallow copy. The object is still
pointing to the same object in both arrays*/

/*Question 5
The following function unnecessarily uses two return statements to return 
boolean values. Can you rewrite this function so it only has one return 
statement and does not explicitly use either true or false?
*/
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
//alt Function 01
function isColorValid(color) {
  return (color === "blue" || color === "green");
}

//alt Function 02
/* I didn't come up with anything, I was stuck in thinking about conditionals
and how to organize the existing function. I kept trying to use a ternary operation.
I do like the includes(), that is a nice way to test multiple items. I believe
we used that in the RPS game.
*/
