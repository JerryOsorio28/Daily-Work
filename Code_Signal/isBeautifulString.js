// A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; 
// ie: b occurs no more times than a; c occurs no more times than b; etc. Given a string, check whether it is beautiful.
// ------------
// Example
// ------------
// For inputString = "bbbaacdafe", the output should be true.
// This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, 
// this string qualifies as beautiful.

// For inputString = "aabbb", the output should be false.
// Since there are more bs than as, this string is not beautiful.

function isBeautifulString(inputString) {
  let abc = {'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0
  }
  let objKeys = Object.keys(abc)

  for(let letter in inputString){
    if(objKeys.includes(inputString[letter])){
      abc[inputString[letter]]++
    }
  }

  let objValues = Object.values(abc)

  for(let i = 0; i < objValues.length; i++){
    if(objValues[i] < objValues[i+1]){
      return false
    }
  }

  return true

}