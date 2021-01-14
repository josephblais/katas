const repeatNumbers = function(data) {
  let string = "";
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i][1]; x++) {
      string += data[i][0];
    }
    if (i < (data.length-1)) {
      string += ", ";
    }
  }
  return string;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));


// for each sub-array, run it through a for loop that pushes the first array element
//the number of times the second array element 0