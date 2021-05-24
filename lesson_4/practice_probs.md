# Problem 1
What is the return value of the filter method call below? Why?

[1, 2, 3].filter(num => 'hi');

  ## Response:
  filter() returns [1, 2, 3]
  Because its looking for the truthiness of each
  callback return, which is 'hi' which is a truthy value so it returns 
  every element from the original array

# Problem 2
What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

  ## Response:
  map() returns [undefined, undefined, undefined] 
  Because its looking for the return value of the callback function on each
  element. The function doesn't have a return because of the way its written
  so the function returns undefined

# Problem 3
The following code differs slightly from the above code. What is the return value of map in this case? Why?

[1, 2, 3].map(num => num * num);

  ## Response:
  map() returns [1, 4, 9] 
  Because its looking for the return value of the callback function on each
  element. The function is written with an implicit return so it will correctly multiply each element by itself and return that value which is then pushed into a returned array.

# Problem 4
What is the return value of the following statement? Why?

['ant', 'bear', 'caterpillar'].pop().length;

  ## Response
  11
  The return value for pop() is the last element from the array on which is was called. In this case it returns the string 'caterpillar' which we are then looking for the length of, which is 11.

# Problem 5
What is the callback's return value in the following code? Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

  ## Response
  The callback's return is truthy or falsy for each iteration, which in this case is [2, 4, 6] each of which is a truthy value. So every() called here will return TRUE

# Problem 6
How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

  ## Response
  It fills the array with the value we tell it to use. 
  first arg = 1, the value we want to fill the array with
  second arg = 1, the starting index for where we want to start filling
  thrid arg = 5, the stop index for where we want to stop filling
    in this case it fills to the end of the array
  Yes it is destructive. The return value of the above will be [1, 1, 1, 1, 1]. If we then log arr again we can check to see if the original array was modified. Which we will find that it was. 