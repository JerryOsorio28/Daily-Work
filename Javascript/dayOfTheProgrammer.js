// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
    var month = 1; 
    var daysSum = [] 

  // this function gives us the number of days in the given month, of the given year.
  function daysInMonth (month, year) { 
    return new Date(year, month, 0).getDate(); 
  } 

  // check if the year is divisible by 4...
  if(year % 4 === 0 && year < 2100){
    // if it is, we log sep 12 with the given year.
    return `12.09.${year}`
    // if it is greater than 2100 and it's not leap year... 
  } else if(year >= 2100 && year % 4 !== 0){
    return `13.09.${year}`
  // if it is not, it's not leap year so we do the following...
  } else {
  // while month is less or equal than 8...
  while(month <= 8){
    // we want to run the daysInMonth function and push the results to daysSum array
    if(year < 1918 && year % 4 === 0 && month == 2){
      daysSum.push(15)
      month++
    // else we check if the year is 1918 and month is 2..
    }else if (year === 1918 && month == 2){
    // if it is we set the 2nd month to be 15 and increase month by 1
      daysSum.push(15)
      month++
    } 
    else {
      let day = daysInMonth(month, year)
      daysSum.push(day)
      // increase the month by 1
      month++
    }
  }
  // after the while loop is done, we want to reduce the daysSum arr to a single value
  let reducedArr = daysSum.reduce((a, b) => a + b)
  //then we want to substract that value reduced from 256, the result will be the day we need.
  let result = 256 - reducedArr
  // we then return the sep, the day we need, and the year given in the input.
  return `${result}.09.${year}`
  }
}