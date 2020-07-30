// An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. 
// There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.
// Given a string, find out if it satisfies the IPv4 address naming rules.
// ------------
// Example
// ------------
// For inputString = "172.16.254.1", the output should be `true`;
// For inputString = "172.316.254.1", the output should be `false`, 316 is not in range [0, 255].
// For inputString = ".254.255.0", the output should be `false`, There is no first number.

function isIPv4Address(inputString) {
  //we can split the string for better handling
  let splitStr = inputString.split('.')
  // once split we can then check if each value it's a valid IPv4 address, we do this by iterating over the new array and check...
  for(let i = 0; i < splitStr.length; i++){
    // if the length of the new array is less than 4, if it is, we break the loop and return false.
    if(splitStr[i].length == 0 || splitStr.length !== 4){
      return false
    }
    // if the value in the current index, is a valid number, and if it ranges from 0-255, AND, if it does not, we break and return false.
    if(Number(splitStr[i]) < 0 || Number(splitStr[i]) > 255 || isNaN(splitStr[i]) === true){
      return false
    }
    // if the current element is a 0, and if it has more than one 0, return false.
    if(Number(splitStr[i][0]) === 0 && splitStr[i].length > 1){
      return false
    }
  }
  // // if the loop did not break and returned a value, we return true.
  return true
}