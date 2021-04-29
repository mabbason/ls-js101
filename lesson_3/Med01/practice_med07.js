//Question 7
//What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

/*
The output should be 34.
messWithIt() is called with answer as the argument. BUT nothing happens 
to answer... it is just used for its value to generate a newAnswer.
*/