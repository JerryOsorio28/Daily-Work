// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.
// -----------
// Example
// -----------
// For n = 152, the output should be 52;
// For n = 1001, the output should be 101.

function deleteDigit(n) {
  n = n.toString().split('')
  let nCopy = [...n]
  let max = 0
  for(let i = 0; i < n.length; i++){
      nCopy.splice(i, 1)
      let sum = nCopy.reduce((a,b) => a + b)
      if(parseInt(sum) > max){
          max = parseInt(sum)
      }
      nCopy = [...n]
  }
  return max
}