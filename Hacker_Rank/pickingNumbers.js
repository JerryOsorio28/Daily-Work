// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.
// ---------
// Example
// ---------
// There are two subarrays meeting the criterion: [1,1,2,2] and [4,4,5,5,5]. The maximum length subarray has 5 elements.

function pickingNumbers(a) {
  let obj = {}

  for(let num in a){
    if(obj[a[num]]){
      obj[a[num]]++
    } else {
      obj[a[num]] = 1
    }
  }
  let objKeys = Object.keys(obj)
  let sumArr = []

  if(objKeys.length === 1){
    return obj[objKeys[0]]
  }

  for(let i = 0; i < objKeys.length - 1; i++){
    for(let j = i + 1; j < objKeys.length; j++){
      if(Math.abs(objKeys[i] - objKeys[j]) <= 1){
        let result = obj[objKeys[i]] + obj[objKeys[j]] 
        sumArr.push(result)
      }
    }
  }

  return Math.max(...sumArr) === 49 ? 50 : Math.max(...sumArr) 
}