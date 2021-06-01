/*
PROBLEM
  input: object, nexted objects
  output: array, nested arrays + values
  rules:
    EXPLICIT
    - return an array which only contains the following:
      - If a nested obj is fruit
        - return the color value(s), capitalized
      - If a nested obj is vegetable
        - return the size value, all caps
        
EXAMPLES
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

Should result in following return:
[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

DATA STRUCTURE
array

ALGORITHM
- write function getProduceCharacteristics takes obj as 
- convert to array?? (best step here, maybe else where)
- iterate through the array
  - if the type is fruit
    - get the colors (helper function??) and put in array
  - if the type is veggie
    - get the size (helper function??) and put in array
- return result array

CODE

*/

let produceObj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};


function getProduceCharacteristics(obj) {
  let resultArr = [];

  Object.entries(obj).forEach(subArr => {
    if (subArr[1]['type'] === 'fruit') {
      resultArr.push(getFruitColors(subArr[1]));
    } else if(subArr[1]['type'] === 'vegetable') {
      resultArr.push(getVeggieSize(subArr[1]));
    }
  });

  return resultArr;
}

function getFruitColors(obj) {
  return obj['colors'].map(color => color[0].toUpperCase() + color.slice(1));
}

function getVeggieSize(obj) {
  return obj['size'].toUpperCase();
}

console.log(getProduceCharacteristics(produceObj));