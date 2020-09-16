// Given array of integers, remove each kth element from it.

function extractEachKth(inputArray, k) {
  let index = k
  while(index <= inputArray.length){
      inputArray.splice(index-1, 1)
      index += k - 1
  }
  return inputArray
}
extractEachKth([2, 4, 6, 8, 10], 2)