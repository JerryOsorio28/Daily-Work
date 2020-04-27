// Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. 
// You can only see the k numbers in the window. Each time the sliding window moves right by one position. 
// Return the max sliding window.

// Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
// Output: [3,3,5,5,6,7] 
// Explanation: 

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7


var maxSlidingWindow = function(nums, k) {
  //arr that holds the output
  let output = []
  //var that holds the current max
  let max = 0
  // keeps a track of index
  let index = 0
  //while true
  while(true){
    //condition that checks if index is less than k
    if(index < k){
      //if it is, we check if the incoming num is > than the max
      if(max < nums[index]){
        // if it is we update it
        max = nums[index]
      // otherwise, we check if max equals 0, and if so, if the incoming num is less than 0 (handles negative values)
      } else if(max === 0 && nums[index] < max){
        // if true, update the max value
        max = nums[index]
      }
      //increase index by 1
      index++
    // when index is equal k..
    } else {
      // we push current max value
      output.push(max)
      // we check if the length of the original arr is k..
      if(nums.length === k){
        // if it is, we can assume we reached the last value on the original arr, so we break
        break
      }
      // otherwise, we remove the first element of the arr
      nums.splice(0, 1)
      // reset index to 0
      index = 0
      // reset max to 0
      max = 0
    }
  }
  // return our output
  return output
};