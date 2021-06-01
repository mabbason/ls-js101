/*
PROBLEM
  input: objects nested in outer array
  output: new array/obj but maintain identical structure
  rules:
    EXPLICIT
    - increment each value in each nested object by 1
    - maintain the identical data structure
    - do not mutate the original array/objs
    - use map()

EXAMPLES
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
arrCopy = [{ a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 }];

DATA STRUCTURE
objs nested in array

ALGORITHM
- create function incrementValues takes an array with nested objs as arg
- use map to iterate through array, this will pass an object to the callback
- the return of the callback needs to be...
 - a COPY of the object, with each value incremented by 1
- return the output of map()

CODE
*/
let arrNested = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

function incrementValues(arr) {
  return arr.map( obj => {
    let objCopy = Object.assign({}, obj);

    for(let prop in objCopy) {
      objCopy[prop] += 1;
    }

    return objCopy;
  });
}

console.log(incrementValues(arrNested));
console.log(arrNested);