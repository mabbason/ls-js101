/*
PROBLEM
  input: array, with nested objects
  output: same array, but sorted
  rules:
    EXPLICIT
    - rearrange the order of the elements in the input array
    - each element is an object in which there is 
      - a 'published' : 'year' (string value) pair
    - the order of the objects in the array needs to be based in the year published
      - the earliest published year book object will be indexed 0, the most recent at the end
    
EXAMPLES
Rearranged would look like:
books = [
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
];
DATA STRUCTURE
Array w nested objects

ALGORITHM
 - sort the array
 - smallest first, so callback of sort needs to return negative
 - need to access a specific key 'published' on arr[index] objects
  - convert the text year to number year 
    - need to return this as 'a' and 'b' for comparisons
    - (a - b) order

CODE
*/

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => {
  return Number(a['published']) - Number(b['published']);
});

console.log(books);