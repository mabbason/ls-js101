/*Question 1 
Will the code below raise an error?
*/


let numbers = [1, 2, 3];
numbers[6] = 5;
//No it should add undefined elements to numbers until it can input 5 at index 6

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?
//It should return undefined

/*
Ah, I thought it put in undefined... but it just has empty slots. Literally nothing.
*/

/*Question 2 
How can you determine whether a given string ends 
with an exclamation mark (!)?
*/

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

str1[str1.length - 1] === '!'; //proposed solution
/*
My method works but isn't as elegant I see. 
*/

/*Question 3
Determine whether the following object of people 
and their age contains an entry for 'Spot':
*/

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
ages.keys().includes('Spot');

/*
Gah, chalk this one up to mental attrition and end-of-day brain. I read the docs
and found that without the hint, but I didn't think it was a solution. 
For some reason I thought it was searching the values, not the keys.
*/

/*Question 4
Using the following string, create a new string that contains all lowercase 
letters except for the first character, which should be capitalized. 
(See the example output.)
*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

munstersDescription = munstersDescription[0].toUpperCase() + 
  munstersDescription.slice(1).toLowerCase(); // proposed solution

/*
Pretty much the same thing it looks like.
*/

/*Question 5
What will the following code output?
*/

console.log(false == '0'); //answer: true
console.log(false === '0'); //answer: false

//Sweet, I just blew a coercion question on the quiz so it's nice to get this here

/*Question 6
We have most of the Munster family in our ages object:
*/
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
//Add entries for Marilyn and Spot to the object:
let additionalAges = { Marilyn: 22, Spot: 237 };

ages = object.assign(ages, additionalAges);

/*Question 7
Determine whether the name Dino appears in the 
strings below -- check each string separately):
*/

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

str1.includes('Dino'); // false
str2.includes('Dino'); // true

/*
Question 8
How can we add the family pet, "Dino", to the following array?
*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// with the push method
flintstones.push('Dino');

console.log(flintstones);

/*
Question 9

In the previous problem, our first answer added 'Dino' to the array like this:
*/

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// with the same method, just add elements
flintstones.push('Dino', 'Hoppy');

console.log(flintstones);

/*
Question 10

*/
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

advice.split(' ').slice(0, 8).join(' ');

//I suspected there was a way to do this without breaking it apart and recombining