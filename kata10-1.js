const talkingCalendar = (date) => {
  let outputDate = "";
  dateArray = date.split("/");
  //Month
  if (dateArray[1] === "01") {
    outputDate += "January ";
  } else if (dateArray[1] === "02") {
    outputDate += "February ";
  } else if (dateArray[1] === "03") {
    outputDate += "March ";
  } else if (dateArray[1] === "04") {
    outputDate += "April ";
  } else if (dateArray[1] === "05") {
    outputDate += "May ";
  } else if (dateArray[1] === "06") {
    outputDate += "June ";
  } else if (dateArray[1] === "07") {
    outputDate += "July ";
  } else if (dateArray[1] === "08") {
    outputDate += "August ";
  } else if (dateArray[1] === "09") {
    outputDate += "September ";
  } else if (dateArray[1] === "10") {
    outputDate += "October ";
  } else if (dateArray[1] === "11") {
    outputDate += "November ";
  } else if (dateArray[1] === "12") {
    outputDate += "December ";
  }
  //Day
  if (dateArray[2] === "01") {
    outputDate += "1st, "
  } else if (dateArray[2] === "21" || dateArray[2] === "31") {
    outputDate += `${dateArray[2]}st, `
  } else if (dateArray[2] === "02") {
    outputDate += "2nd, "
  } else if (dateArray[2] === "22") {
    outputDate += "22nd, "
  } else if (dateArray[2] === "03") {
    outputDate += "3rd, "
  } else {
    outputDate += `${dateArray[2]}th, `
  }
  // Year
  outputDate += dateArray[0];
  return outputDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
