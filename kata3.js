const numberOfVowels = function(data) {
  let vowels = 0;
  for (let x = 0; x < data.length; x++) {
    if (data[x] === "a" || data[x] === "e" || data[x] === "i" || data[x] === "o" || data[x] === "u") {
      vowels++;
    }
  }
  return vowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
