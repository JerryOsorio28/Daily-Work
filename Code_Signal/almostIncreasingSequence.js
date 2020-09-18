// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
// Sequence a0, a1, ..., an is considered to be a strictly increasing if a(0) < a(1) < ... < a(n). 
// Sequence containing only one element is also considered to be strictly increasing.

function almostIncreasingSequence(sequence) {
  // we might need a variable, a boolean that keeps a track of wether we already removed an element or not.
  let removedNum = false
  let sequenceCopy = [...sequence]
  // we need to iterate over the arr
  for(let i = 0; i < sequenceCopy.length; i++){
  // as we iterate we can compare the current element in the iteration with the next one to the right..
  // if the next one on the right is greater, we continue our iteration.. if it is not greater, we remove the next element and,
  // we check if the next one after is greater than the current, if it is, we continue, if it is not we return false.
      if(sequenceCopy[i] >= sequenceCopy[i+1]){
          if(removedNum === false){
              if(i == 0){
                  sequenceCopy.splice(i, 1)
              } else if(sequenceCopy[i+1] > sequenceCopy[i-1]){
                  sequenceCopy.splice(i, 1)
              } else {
                  sequenceCopy.splice(i+1, 1)
              }
              i--
              removedNum = true
          } else {
              return false
          }
      }
  }
  // if nothing returns from loop, we return true
  return true
}