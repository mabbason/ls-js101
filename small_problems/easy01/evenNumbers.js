// Problem: Log all even numbers from 1 to 99, inclusive, 
// to the console, with each number on a separate line.

/* Pseudocode Program Logic
Write a loop where the iterator starts at 2 and increments by 2
for each loop and <= 99. Log the value of the iterator on each loop.
*/

for (let i = 2; i <= 99; i += 2) {
  console.log(i);
}

// Program successfully completes objective

/*Further exploration: Repeat this exercise with a technique different 
from the one that you used, and different from the one provided. 
Also consider adding a way for the user to specify the 
limits of the odd numbers logged to the console.

Initial ideas: write a function which takes two args from user input 
for upper and lower limits. Then in function use a different looping
mechanism (maybe while) and then instead of incrementing 2, increment 1
and test for odd with (% / 2 ===) and if/else to print only odd numbers
*/
