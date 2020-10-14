// Check if the given string is a correct time representation of the 24-hour clock.
// ---------
// Example
// ---------
// For time = "13:58", the output should be true;
// For time = "25:51", the output should be false;
// For time = "02:76", the output should be false.

function validTime(time) {
  // I'd split the input by the colon, so we have 2 element's in an array
  time = time.split(':')
  console.log(time)
  // we can check if the first element is greater or equal to 0 or is less then 24.
  // we can check if the second element is greater or equal to 0 or is less then 59.
  if(time[0] >= 0 && time[0] < 24 && time[1] >= 0 && time[1] < 60){
      // if checks above are true, return true, otherwise return false.
      return true
  }
  return false
}