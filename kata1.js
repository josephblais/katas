const sumLargestNumbers = function(data) {
  let num1 = data[0];
  let num2 = data[0];
  for (let firstNum of data) {
    if (firstNum > num1) {
      num1 = firstNum;
    }
  }
  for (let secondNum of data) {
    if (secondNum > num2 && secondNum < num1) {
      num2 = secondNum;
    }
  }
  return num1 + num2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
