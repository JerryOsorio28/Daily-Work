// Given an array of integers nums and an integer k, determine whether there are two distinct indices i and j in the array where nums[i] = nums[j] 
// and the absolute difference between i and j is less than or equal to k.

function containsCloseNums(nums, k) {
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                if(j - i <= k){
                    return true
                }
            }
        }
    }
    return false
}