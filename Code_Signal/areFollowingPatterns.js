// Given an array strings, determine whether it follows the sequence given in the patterns array. 
// In other words, there should be no i and j for which strings[i] = strings[j] and 
// patterns[i] ≠ patterns[j] or for which strings[i] ≠ strings[j] and patterns[i] = patterns[j].

function areFollowingPatterns(strings, patterns) {
  // we make an object for a key/value pair match
  let obj = {}
  // we iterate over both arrays passed as parameters simultaneously
  for(let i = 0; i < strings.length; i++){
    // we check if the key already exists in the obj
    if(!obj[patterns[i]]){
      // if it does not, we check if the obj is empty or if it's not empty, we check before creating the key/value pair, if the key being added already exists as a value in any other key...
        if(obj.length == 0 || !Object.values(obj).includes(strings[i])){
            // if it is empty or doesn't exist as a value in any other key we add it..
            obj[patterns[i]] = strings[i]
        // otherwise, since it already does, we return false
        } else {
          return false
        }
    // else if it does exists, we check if both values in current position doesn't match..
    } else if(obj[patterns[i]] !== strings[i]){
      // if they don't it means key already exists with a different value, so we return false
      return false
    }
  }
  // otherwise if everything was created and nothing returned, we return true
  return true
  }

  areFollowingPatterns(['cat', 'dog', 'dog'], ['a', 'b', 'c']) //this returns false
// areFollowingPatterns(['aaa'], ['aaa']) //this should return true