// Given a string, find out if its characters can be rearranged to form a palindrome.
// -------------
// Example
// -------------
// For inputString = "aabb", the output should be `true`.
// We can rearrange "aabb" to make "abba", which is a palindrome.

function palindromeRearranging(inputString) {
  // we can make an object that will keep a track of how many characters the string has, and from there we can determine, if all the characters have the same amount of letters found, we can safely assume we can rearrange it to form a palindrome, otherwise, if it exists 2 or more letters that has a single letter, we cannot form a plindrome.
  
  let obj = {}

  for(let i = 0; i < inputString.length; i++){
    if(obj[inputString[i]]){
      obj[inputString[i]]++
    } else {
      obj[inputString[i]] = 1
    }
  }

  let values = Object.values(obj)
  let uneven = 0

  // this for loop count checks if there is any uneven count of letters (if more than one uneven count is found, is not a palindrome)
  for(let i = 0; i < values.length; i++){
    if(values[i] % 2 !== 0){
      uneven++
    }
  }

  if(uneven <= 1){
    return true
  } else {
    return false
  }
}
palindromeRearranging('abbcabb') // should return true