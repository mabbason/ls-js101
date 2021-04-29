//What will the following two lines of code output?

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);
//Don't look at the solution before you answer.
/*
Welp, my initial gut feeling is 0.9 and true respectively. But that seems too
easy and why would that be a medium difficulty question. So I'm going to say 
that JS probably compares the 0.6 and the 0.9 first, THEN goes to concatenate
0.3 and false. Then coerces 0.3 to a string so you would get 0.3false...
BUT tbh that seems pretty funky because at that point there aren't any strings
so I don't know.

Wow, I was wrong on BOTH accounts. Everything. 
It really just boiled down to JS and floating point numbers.
*/