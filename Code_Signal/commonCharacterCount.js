// Given two strings, find the number of common characters between them.

function commonCharacterCount(s1, s2) {
  s1 = s1.split('')
  s2 = s2.split('')
  let counter = 0
  
  // this loop will iterate over the first string (s1)
  for(let i = 0; i < s1.length; i++){
      // this loop will iterate over the second string (s2)
      for(let j = 0; j < s2.length; j++){
          // if the current element in the iterations are the same, we increase the counter by 1 and remove the elements from the strings.
          if(s1[i] === s2[j]){
              counter++
              s1.splice(i, 1)
              s2.splice(j, 1)
              j = -1
          }
      }
  }
  return counter
}