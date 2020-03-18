// Given an integer array nums, find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.
// Example: Input: [-2,1,-3,4,-1,2,1,-5,4], Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

const largestSum = arr => {
    // sub array variable
    let subArr = []
    // an array that keeps a track of reduced arrays
    let reducedValues = []
    // for loop to iterate over the arr to grab sub arrays
    for(let i = 0; i < arr.length; i++){
      // for loop to increase size of sub array
      for(let j = i + 1; j < arr.length; j++){
        // we grab the sub array
        subArr.push(arr[j])
        // we reduce the sub array and we push the reduced value to the reduced array
        reducedValues.push(subArr.reduce((a, b) => a + b))
      }
      // we reinitialize the subArr to be empty
      subArr = []
    }
    // since the first value was not pushed to the sub arr, we compare if it is greater than the max value found in the reduced arr and return it if it is...
    if(Math.max(...reducedValues) > arr[0]){
      return Math.max(...reducedValues)
    // otherwise we return the first element in the arr
    } else {
      return arr[0]
    }
  }
  
  largestSum([-2,1,-3,4,-1,2,1,-5,4])