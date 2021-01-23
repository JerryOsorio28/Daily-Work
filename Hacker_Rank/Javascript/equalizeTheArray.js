// Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.
// -------------
// Example
// -------------
// arr=[1,2,2,3]
// Delete the 2 elements 1 and 3 leaving arr=[2,2]. If both twos plus either the 1 or the 3 are deleted, it takes 3 deletions to leave either [3] or [1]. 
// The minimum number of deletions is 2.

// Complete the equalizeArray function below.
function equalizeArray(arr) {
  // we iterate over the arr, counting every single element in it to determine which element gets repeated the most.
  let obj = {}

  for(let num in arr){
    if(obj[arr[num]]){
      obj[arr[num]] += 1
    } else {
      obj[arr[num]] = 1
    }
  }
  // once we know which element get's repeated the most, we remove the element from the object, and we sum up the remaining count, 
  // giving us the minimum numbers we needed to remove to make our arr even.
  obj = Object.values(obj)
  
  if(obj.length <= 1){
    return 0
  }else{
    obj.splice(obj.indexOf(Math.max(...obj)), 1)
    return obj.reduce((a,b) => a + b)
  }
}
equalizeArray([51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51, 51])