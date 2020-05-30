// You are given a number of sticks of varying lengths. You will iteratively cut the sticks into smaller sticks, discarding the shortest pieces until there are none left. 
// At each iteration you will determine the length of the shortest stick remaining, cut that length from each of the longer sticks and then discard 
// all the pieces of that shortest length. When all the remaining sticks are the same length, they cannot be shortened so discard them.

// Given the lengths of 'n' sticks, print the number of sticks that are left before each iteration until there are none left.

// For example, there are n=3 sticks of lengths arr=[1,2,3]. The shortest stick length is 1, so we cut that length from the longer two and discard the pieces of length 1.
//  Now our lengths are arr=[1,2]. Again, the shortest stick is of length 1, so we cut that amount from the longer stick and discard those pieces. 
// There is only one stick left, arr=[1], so we discard that stick. Our lengths are arr=[3,2,1].

// For each operation, print the number of sticks that are present before the operation on separate lines.

function cutTheSticks(arr) {
  let result = [] 
  // sort the array to keep the minimum numbers on the left.
  arr = arr.sort((a, b) => a > b ? 1 : a < b ? -1 : 0)
  while(true){
    // a condition that checks if the arr's length is greater than 0, if it is not, we break the loop.
    if(arr.length <= 0){
      break
    }
    // we need to print how many values are in the arr
    result.push(arr.length)
    // we need a var that holds the minimum value
    let min = arr.shift()
    // we need a loop to iterate over the arr, to subtract the minimum value of the arr.
    for(let i = 0; i < arr.length; i++){
      // have a condition that checks if the current value in the iteration is the same as our minimum value, if it is, we need to remove it from the arr. If it is not, we want to subtract the min value out of the current number.
      if(arr[i] === min){
        arr.splice(i, 1)
        i--
      } else {
        arr[i] -= min
      }
    }
  }
  return result.map(int => int)
}
// cutTheSticks([5,4,4,2,2,8])
// cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1])
// cutTheSticks([1,13,3,8,14,9,4,4])
cutTheSticks([8, 8, 14, 10, 3, 5, 14, 12])

