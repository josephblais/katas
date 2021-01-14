const multiplicationTable = (maxValue) => {
  let timesTable = "";
  for (let col = 1; col <= maxValue; col++) {
    for (let row = 1; row <= maxValue; row++) {
      timesTable += (col * row).toString() + " ";
    }
    timesTable += "\n";
  }
  return timesTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));