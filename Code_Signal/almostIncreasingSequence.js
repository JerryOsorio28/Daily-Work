// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
// Sequence a0, a1, ..., an is considered to be a strictly increasing if a(0) < a(1) < ... < a(n). 
// Sequence containing only one element is also considered to be strictly increasing.

function almostIncreasingSequence(sequence) {
  // we can iterate over the sequence, and as we iterate, we can automatically remove the current index, 
  // and check if there is a constant sequence, if there is, return true, if not, we move to the next index,
  // remove the number and check again. If the loop is done and it does not return, we then return false.
  let sequenceCopy = [...sequence]
  let count = 0
  let bool = true
  
  while(count <= sequence.length){
    for(let i = 0; i < sequenceCopy.length; i++){
        if(sequenceCopy[i] >= sequenceCopy[i+1]){
            sequenceCopy = [...sequence]
            sequenceCopy.splice(count, 1)
            bool = false
            break
        } else {
            bool = true
        }
    }
    if(bool === true){
        return true
    } else {
        count++
    }
  }
  return false
}