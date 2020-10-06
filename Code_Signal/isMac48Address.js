// A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.
// The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).
// Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.
// ---------
// Example
// ---------
// For inputString = "00-1B-63-84-45-E6", the output should be true;
// For inputString = "Z1-1B-63-84-45-E6", the output should be false;
// For inputString = "not a MAC-48 address", the output should be false.

function isMAC48Address(inputString) {
  // we store the conditions we want to test our string with using regex
  let regNums = /[0-9]/
  let regLetters = /[A-F]/
  // a variable that keeps a track of the number of characters found before a dash
  let count = 0
  // a condition that checks if the length of the string is less than 17 or greater
  if(inputString.length !== 17){
      return false
  }
  // we loop over the string and check the all the characters agains the regex conditions
  for(let i = 0; i < inputString.length; i++){
      // we check if the count is equal to 2 and current character is a hyphen, it if is, we reset count to 0..
      if(regNums.test(inputString[i]) === true || regLetters.test(inputString[i]) === true){
          // as we iterate, we want to count up the valid character found
          count++
      } else if(inputString[i] === '-' && count === 2){
          count = 0
      } else {
      // otherwise, we return false 
          return false
      }
  }
  return true
}