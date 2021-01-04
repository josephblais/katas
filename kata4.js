const instructorWithLongestName = function(instructors) {
  let longestNameIndex = 0;
  for (let x = 0; x < instructors.length; x++) {
    if (instructors[x].name.length > instructors[longestNameIndex].name.length) {
      longestNameIndex = x;
    }
  } 
  return instructors[longestNameIndex];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
