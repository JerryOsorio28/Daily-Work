// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.
// -----------
// Example
// -----------
// For st = "abcdc", the output should be "abcdcba".

// --------FIRST ATTEMPT--------------- 7/11 tests passed
function buildPalindrome(st) {
  // we need a var to keep a track of the letters being added to the end of the string
  st = st.split('')
  let middle = Math.floor(st.length / 2)
  //what we wanna do is iterate from both ends of the str at the same time, we can use a for loop with 2 variables to do so, one starting at the beginning, another one at the end.
  for(let i = 0, j = st.length - 1; i <= middle; i++, j--){
      // we check if the values of both var are different in the current iteration, if they are, we want to concatenate the left most var value to the var tracking the letters needed to be added to the right side of the string, and subtract an index from the rightmost variable.
    if(st[i] !== st[j] || i == j && st.length % 2 === 0){
      st.splice(j+1, 0, st[i])
      j++
    }
  }
  st = st.join('')
  return st
}
// --------SECOND ATTEMPT--------------- 10/11 tests passed
function buildPalindrome(st) {
  let strCopy = st
  let letters = ''
  
  for(let i = 0; i < strCopy.length; i++){
    let middle = Math.floor(strCopy.length / 2)
    
    let firstHalf = strCopy.split('')
    firstHalf.length = middle
    
    let secondHalf = strCopy.split('')
    secondHalf = secondHalf.splice(strCopy.length % 2 === 0 ? middle : middle+1, strCopy.length - 1)
    
    firstHalf = firstHalf.sort()
    secondHalf = secondHalf.sort()
    

    if(firstHalf.join('') == secondHalf.join('')){
      letters = letters.split('').reverse().join('')
      return st += letters
    } else {
      letters += strCopy[i]
      strCopy += strCopy[i]
    }
  }
}