// return 'YES' if your function finds the word 'hackerrank' in the string passed on in the parameters, otherwise return 'NO'.

// Complete the hackerrankInString function below.
function hackerrankInString(s) {
  // have a variable that store the word hacker rank
  let hackerrank = 'hackerrank'
  // a variable that forms the string we are looking for
  let subStr = ''
  // we need to iterate over the hackerrank string and..
  for(let i = 0; hackerrank.length; i++){
    // we need to iterate over the string in our params..
    for(let j = 0; j < s.length; j++){
      //as we iterate we check if both current values in the iteration are the same..
      if(hackerrank[i] === s[j]){
        // if they are the same, we concatenate the letter to the subStr and we move both pointers forward..
        subStr += s[j]
        i++
      }
    }
    // a condition that checks if both hackerrank string and the string being formed are the same, if they are return true, otherwise return false.
    return hackerrank == subStr ? true : false
  }
}