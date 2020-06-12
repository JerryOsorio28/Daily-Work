// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
// ----------------
// EXAMPLE
// ----------------
// For s = "abacabad", the output should be
// firstNotRepeatingCharacter(s) = 'c'.

function firstNotRepeatingCharacter(s) {
  let obj = {}
  
  for(let i = 0; i < s.length; i++){
    if(obj[s[i]]){
      obj[s[i]] += 1
    } else {
      obj[s[i]] = 1
    }
  }

  let keys = Object.keys(obj)
  let values = Object.values(obj)

  for(let num in values){
    if(values[num] > 1){
      break
    }
  }

  for(let i = 0; i < values.length; i++){
    if(values[i] === 1){
      return keys[i]
    }
  }
  return '_'
}