// Given a string, output its longest prefix which contains only digits.

function longestDigitsPrefix(inputString) {
  let str = ''
  for(let i = 0; i < inputString.length; i++){
      if(isNaN(inputString[i]) === false && inputString[i] !== " "){
          str += inputString[i]
      } else {
          return str
      }
  }
  return str
}