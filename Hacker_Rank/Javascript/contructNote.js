function constructNote(magazine, note) {
  // we make an obj to with the magazine values as keys, and their instances if any as values.
  let obj = {}
  // we iterate over magazine
  for(let i = 0; i < magazine.length; i++){
    // we check if value exists in obj
    if(obj[magazine[i]]){
      // if it does we push the instance to the arr
      obj[magazine[i]].push(magazine[i])
    } else {
      // otherwise, we create it
      obj[magazine[i]] = [magazine[i]]
    }
  }
  // we iterate over the note words
  for(let i = 0; i < note.length; i++){
    // we check if the word exists in the obj AND if it has any instances left
    if(obj[note[i]] && obj[note[i]].length !== 0){
      // if it does, we remove the instance from the obj
      obj[note[i]].pop()
      // and we remove the value from the note arr 
      note.splice(i, 1)
      // set i to -1, since we want to start from the beginning of the note arr
      i = -1
    // otherwise, we return false
    } else {
      return false
    }
  }
  // at this point if loop is done, it means we found all words in note, so we return true
  return true
}