/*Question 1

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

It looks like the difference boils down to the placement of the {
on the same line as the return or not.
I feel like it shouldn't matter or not. But again the fact that it's a
question at all makes me think it won't return the same results.
I'm going to go with JS as being a little loosy and it will interpret them
as the same result.

Yeah there it is. They do not. 
But either way, even if I had guessed correctly it wouldn't have meant anything
because I wouldn't have been able to explain why.

Ah the answer makes sense too. I like when it is pretty straight forward like that.
*/ 

/*Question 2
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

the last line logs { first: [1, 2] }
because of pass-by-reference
*/ 

/*Question 3, scope hell
A) prints:
one is: three
two is: three
three is: three
Yikes, confusing... I thought I had it, but in the end I felt 
very shaky on this. It started to feel circular.
//The sad thing is that I actually had it, but then after going through 
the following snippets, I second guessed and changed it.

B) prints:
one is: two
two is: three
three is: one
Pass-by-reference means that the original array is pointed at within
the function, then is reassigned to new value b/c you can mutate on object.
It is not a primitive, which won't let you do that.
//Here I was just wrong. I can see now the same error with variable shadowing

C) prints:
one is: two
two is: three
three is: one
Calling the function modifies each array with splice method.

//I gotta say the pinned discussion is really helpful here... This was tricky for me
//I'm much more solid on it after reading through that but I could def
use some more thinking/practice on this.
*/

/*Question 4
Refactor to handle: "It's a good start, but you missed a few things. 
You're not returning a false condition, and you're not handling the 
case when the input string has more or less than 4 components, 
e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."
*/

//refactored code
const CORRECT_IP_LENGTH = 4;

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if(dotSeparatedWords.length !== CORRECT_IP_LENGTH) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}
//Sweet, I got this one. That felt good :) Especially after question 3