// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
// ---------
// Example
// ---------
// For inputArray = [2, 4, 1, 0], the output should be '3'.

function arrayMaximalAdjacentDifference(inputArray) {
  let arr = []
  // we need to iterate over the array
  for(let i = 0; i < inputArray.length - 1; i++){
      // as we iterate, we subtract the adjacent values and push the result of the substraction in an array.
      let result;
      // to ensure we only push positive integers, we check first which value is greater than the other, and subtract accordingly.
      if(inputArray[i] < inputArray[i+1]){
          result = inputArray[i+1] - inputArray[i]
      } else {
          result = inputArray[i] - inputArray[i+1]
      }
      arr.push(result)
  }
  // after we are done with the iteration, we grab the max value of our array of subtractions.
  return Math.max(...arr) 
}