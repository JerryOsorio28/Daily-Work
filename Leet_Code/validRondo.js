// Rondo Form is a type of musical structure, in which there is a recurring theme/refrain, notated as A. Here are the rules for valid rondo forms:

// Rondo forms always start and end with an A section.
// In between the A sections, there should be contrasting sections notated as B, then C, then D, etc... No letter should be skipped.
// There shouldn't be any repeats in the sequence (such as ABBACCA).
// Create a function which validates whether a given string is a valid Rondo Form.

function validRondo(s) {
  let abc = ['B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z']

  if(s.length > 1 && s[0] == 'A' && s[s.length - 1] == 'A'){
    for(let i = 0; i < s.length; i++){
      if(i % 2 == 0 && s[i] == 'A'){
        continue
      }
      if(i % 2 == 1 && s[i] == abc[0]){
        abc.shift()
      } else {
        return false
      }
    }
    return true
  } else {
    return false
  }
}
validRondo("ABACADAEAFAGAHAIAJA")// ➞ true
// validRondo("ABA")// ➞ true
// validRondo("ABBACCA")// ➞ false
// validRondo("ACAC")// ➞ false
// validRondo("A")// ➞ false