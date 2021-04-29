function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(addToRollingBuffer2(array, 10, 11));
console.log(array); // outputs [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

/*
The methods differ in that push is modifying the original array passed
into the function, where concat is returning a new array.
*/