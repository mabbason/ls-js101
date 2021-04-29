//What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);
//I believe NaN is the only value in JS that doesn't equal itself
//so the output would be 'false'

//How can you reliably test if a value is NaN?
//by using the method isNaN()