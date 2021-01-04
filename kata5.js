const urlEncode = function(text) {
  let processedText = ""
  for (let char = 0; char < text.length; char++) {
    if (text[char] === " ") {
      processedText += "%20"
    }
    else {
      processedText += text[char];
    }
  }
  return processedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
