const camelCase = function(input) {
  let inputArray = input.split(" ");
  let output = "";
  for (let char = 0; char < inputArray.length; char++) {
      inputArray[char] = inputArray[char][0].toUpperCase()+inputArray[char].substring(1); 
  }
  return inputArray.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
