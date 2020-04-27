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
  //var that holds the sum of the window
  let max = 0
  let index = 0
  //while loop to iterate over arr that checks while index 1 - k <= nums length
  while(true){
    //condition that checks if index 2 <= k...
    if(index < k){
      //var that holds the sum of the window += what's in current index
      if(max < nums[index]){
        max = nums[index]
      } else if(max === 0 && nums[index] < max){
        max = nums[index]
      }
      //increase index 2
      index++
    } else {
      output.push(max)
      if(nums.length === k){
        break
      }
      nums.splice(0, 1)
      index = 0
      max = 0
    }
  }
  return output
};