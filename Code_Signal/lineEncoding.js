// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into ["aa", "bbb", "c"]

// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.
// ---------
// Example
// ---------
// For s = "aabbbc", the output should be "2a3bc".

function lineEncoding(s) {
  // var that holds the new string we need to return
  let newStr = ''
  // var that holds the valid substring
  let subStr = ''
  // var that keeps a track of the count of repeated letters, we initialize it to 1.
  let count = 1
  
  for(let i = 0; i < s.length - 1; i++){
      // we check if the current element in the iteration is the same as the next one..
      if(s[i] == s[i+1]){
          // if it is, we want to concatenate to the substring and we increase the count
          subStr += s[i]
          count++
          if(i+1 === s.length - 1){
            newStr += count
            newStr += s[i]
          }
      // if it is not..
      } else {
          // we check if the count is greater than 1, if it is, we want to concatenate the new string plus the count, plus the current character in the iteration.
          if(count > 1){
              newStr += count
              newStr += s[i]
          } else {
          // otherwise, we concatenate the current character in the iteration.
              newStr += s[i]
          }
          if(i+1 === s.length - 1 && s[i] !== s[i+1]){
            newStr += s[i+1] 
          }
          // we reset the substring and the count to initial values
          subStr = ''
          count = 1
      }
  }
  return newStr    
}