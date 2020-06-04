Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
-------------
Example
-------------
For inputArray = [3, 6, -2, -5, 7, 3], the output should be 21, since the two adjacent (7 * 3) equals 21.  

7 and 3 produce the largest product.

function adjacentElementsProduct(inputArray) {
  let arr = []
  for(let i = 0; i + 1 < inputArray.length; i++){
      let mult = inputArray[i] * inputArray[i+1]
      arr.push(mult)
  }
  return Math.max(...arr)
}