function sum(num) {
    let sum = 0; 
    String(num).split('').forEach(digit => sum += Number(digit));
    return sum
  }
  
  console.log(sum(23));
  console.log(sum(496));
  console.log(sum(123456789));