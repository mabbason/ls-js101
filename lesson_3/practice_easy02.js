/*Question 1 
Given a string, return a new string that replaces every occurrence of 
the word "important" with "urgent":
*/
let advice = "Few things in life are as important as house training your pet dinosaur.";
advice.replace('important', 'urgent'); //proposed solution
advice.replace(/important/i, 'urgent'); //proposed solution for multiple occurences

/*Question 2 
The Array.prototype.reverse method reverses the order of elements in 
an array, and Array.prototype.sort can rearrange the elements in a 
variety of ways, including descending. Both of these methods mutate 
the original array as shown below. Write two distinct ways of reversing 
the array without mutating the original array. Use reverse for the 
first solution, and sort for the second.

Bonus Question: Can you do it using the Array.prototype.forEach() method?
*/

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

//Suggested solution for original prompt
let numbersA = [1, 2, 3, 4, 5];
let numbersA2 = Array.from(numbersA).reverse();
console.log(numbersA2); // [ 5, 4, 3, 2, 1 ]
console.log(numbersA); 


numbersB = [1, 2, 3, 4, 5];
let numbersB2 = Array.from(numbersB).sort((num1, num2) => num2 - num1);
console.log(numbersB2); // [ 5, 4, 3, 2, 1 ]
console.log(numbersB);

//Possible solution with the forEach() method
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let numbers2 = [];
numbers.forEach(element => {
  numbers2.unshift(element);
});


/*Question 3
Given a number and an array, determine whether the number is included in the array.
*/
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

numbers.includes(number1);
numbers.includes(number2);


/*Question 4
Starting with the following string (below)
show two different ways to put the expected "Four score and " in front of it.
*/
let famousWords = "seven years ago...";
famousWords1 = "Four score and " + famousWords;
// or
famousWords2 = "Four score and".concat(' ', famousWords);

/*Question 5
Given an array of numbers [1, 2, 3, 4, 5], mutate the array by 
removing the number at index 2, so that the array becomes [1, 2, 4, 5].
*/
numbersArray.splice(2, 1);

/*Question 6
ppose we build an array like this:

Copy Code
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
This code will create a nested array that looks like this:

Copy Code
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
Create a new array that contains all of the above values, but in an un-nested format:

Copy Code
[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
*/
let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

let newArray = [].concat(...flintstones);
console.log(newArray);

/*Question 7
Consider the following object:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
Create an array from this object that contains only two elements: Barney's name and Barney's number:

[ 'Barney', 2 ]

*/
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let newArray = [].concat(Object.entries(flintstones)[2]);
console.log(newArray);

/*
Question 8
How would you check whether the objects assigned to 
variables numbers and table below are arrays?
*/
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
//Use the isArray() method

Array.isArray(numbers);
Array.isArray(table);


/*
Question 9
Back in the stone age (before CSS), we used spaces to align things on the screen. 
If we have a 40-character wide table of Flintstone family members, 
how can we center the following title above the table with spaces?
*/
CONST = TABLE_WIDTH = 40;
let title = "Flintstone Family Members";
let lengthNeeded = (Math.floor((TABLE_WIDTH - title.length)/2)) + title.length;

centeredTitle = title.padStart(lengthNeeded, ' ');

console.log(centeredTitle);
//Ah, same idea, but simpler than mine... I added stuff though I didn't include
//a 'Magic Number' like the proposed solution haha

/*
Question 10
Write two one-line expressions to count the number of lower-case t characters 
in each of the following strings:
*/
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
//probably using regex, looks like I can possibly use match().length 

statement1.match(/t/).length; //works for the first one but breaks down with null and match () for string2
// String.split().filter('t' logic).length makes a lot of sense