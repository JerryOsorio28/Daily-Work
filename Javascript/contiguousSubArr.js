// // Given an integer array nums, find the contiguous subarray (containing at least one number) 
// // which has the largest sum and return its sum.
// // Example: Input: [-2,1,-3,4,-1,2,1,-5,4], Output: 6
// // Explanation: [4,-1,2,1] has the largest sum = 6.

const largestSum = arr => {
    // sub array variable
    let subArr = []
    // an array that keeps a track of reduced arrays
    let reducedValues = []
    // for loop to iterate over the arr to grab sub arrays
    while(arr.length > 0){
      // for loop to increase size of sub array
      for(let i in arr){
        // we grab the sub array
        subArr.push(arr[i])
        // we reduce the sub array and we push the reduced value to the reduced array
        reducedValues.push(subArr.reduce((a, b) => a + b))
      }
      // we reinitialize the subArr to be empty
      subArr = []
      // and we remove the first element on the arr
      arr.shift()
    }
    return Math.max(...reducedValues)
  }
  
  largestSum([-2,1,-3,4,-1,2,1,-5,4])