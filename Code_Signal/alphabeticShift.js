// Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).
// ---------
// Example
// ---------
// For inputString = "crazy", the output should be "dsbaz".

function alphabeticShift(inputString) {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let splitStr = inputString.split('')
  
  for(let i = 0; i < splitStr.length; i++){
      for(let j = 0; j < alphabet.length; j++){
          if(splitStr[i] === alphabet[j]){
              if(splitStr[i] === 'z'){
                  splitStr.splice(i, 1, 'a')
              } else {
                  splitStr.splice(i, 1, alphabet[j + 1])
                  break
              }
          }
      }
  }
  
  return splitStr.join('')
}
