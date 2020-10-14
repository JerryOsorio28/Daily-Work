// Define a word as a sequence of consecutive English letters. Find the longest word from the given string.
// ---------
// Example
// ---------
// For text = "Ready, steady, go!", the output should be "steady".

function longestWord(text) {
  //have a variable that keeps a track of the longest string
  let longest = ''
  // have a variable that keeps a track of the current string being form
  let currentStr = ''
  //have some regex that checks if characters are valid english letters
  let reg = /[a-z]/i
  //we loop over the string, checking every character if it's an english letter, if it is we concatenate it to the longest string variable.
  for(let i = 0; i < text.length; i++){
      if(reg.test(text[i]) === true){
          currentStr += text[i]
      // if current element in iteration is a white space, we check if the current string formed is longer than the longest, if it is, we replace the longest.
      }
      if(text[i] === ' ' || reg.test(text[i]) === false || i === text.length - 1){
          if(currentStr.length > longest.length){
              longest = currentStr
          }
          currentStr = ''
      }
  }
  if(longest == ''){
      longest = currentStr
  }
  return longest
}