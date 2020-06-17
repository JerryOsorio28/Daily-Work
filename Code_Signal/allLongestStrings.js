// Given an array of strings, return another array containing all of its longest strings.
// -----------
// EXAMPLE
// -----------
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {
  let arr = []
  let longest = 0
  
  // first for loop iterates over the arr to check what is the longest string
  for(let i = 0; i < inputArray.length; i++){
      if(inputArray[i].length > longest){
          longest = inputArray[i].length
      }
  }
  // second loop is to add all the strings that have the same length as the longest one in the arr
  for(let i = 0; i < inputArray.length; i++){
      if(inputArray[i].length === longest){
          arr.push(inputArray[i])
      }
  }
  return arr
}
