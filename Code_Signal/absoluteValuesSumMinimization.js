
// Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, 
// which minimizes the following sum: abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
// (where abs denotes the absolute value)
// If there are several possible answers, output the smallest one.
// -----------
// EXAMPLE
// -----------
// For a = [2, 4, 7], the output should be 4.

// for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
// for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
// for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
// The lowest possible value is when x = 4, so the answer is 4.

function absoluteValuesSumMinimization(a) {
  let initialAbs = 0;
  // we need to reduce the initial array to grab the absolute value of it and store it
  for(let i = 0; i < a.length - 1; i++){
      initialAbs += Math.abs(a[i] - a[i+1])
  }
  console.log(initialAbs)
  let min = [];
  // then we would need to reiterate over the array and, subtract the current value in the iteration with the next one to it.
  for(let i = 0; i < a.length; i++){
      let value = 0;
      for(let j = 0; j < a.length; j++){
          let result = Math.abs(a[i] - a[j])
          value += result
      }
      if(min.length <= 0){
          min[0] = a[i]
          min[1] = Math.abs(value - initialAbs)
      } else if (Math.abs(value - initialAbs) < min[1]){
          min[0] = a[i]
          min[1] = Math.abs(value - initialAbs)
      }
      console.log(min)
  }
  // Once we make the substraction, we subtract the result with the initial array result and store it in a variable that will keep a track of the element with the smallest value, with this everytime we iterate we can check if the substraction result with the initial array is the closest one.
}
absoluteValuesSumMinimization([2,4,7])

