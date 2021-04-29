//Alan wrote the following function, 
//which was intended to return all of the factors of number:

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(20));

/*
Alyssa noticed that this code would fail when the input is 0 or a 
negative number, and asked Alan to change the loop. How can he make 
this work without using a do/while loop? Note that we're not looking 
to find the factors for 0 or negative numbers, but we want to handle 
it gracefully instead of raising an exception or going into an infinite loop.

Bonus: What is the purpose of number % divisor === 0 in that code?
*/

//Response below
/*
I originally thought about trying to use a try/catch block, because it seemed
like the problem might have been hinting at it with the language used. But I 
struggled with it. I thought about the while loop but for some reason I thought
the problem was asking us for some 'other' solution.

BONUS: The purpose of the "number % divisor === 0" is to find the remainder.
We want to find all the divisors for which the remaind is '0'. Which would 
make it a factor of 'number'.

The result differs if you change it to factors.push(divisor); by reversing
the order of the returned array. Ingenious use of simple math. I like it.
*/
