// Find and print the number of (i,j) pairs where ar[i] + ar[j] is divisible by 'k'.
// For example, ar=[1,2,3,4,5,6] and k='5'. Our three pairs meeting the criteria are [1,4], [2,3] and [4,6], 
// so we return 3.

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    // var that holds the counter
    let counter = 0
    // for loop to keep track of first value
    for(let i = 0; i < ar.length; i++){
      // for loop to keep track of second value
      for(let j = i + 1; j < ar.length; j++){
        // variable that holds the sum of both values
        // let sum = ar[i] + ar[j]
        // condition that checks if first value + second value / by k remainder is 0, if it is,
        if((ar[i] + ar[j]) % k === 0){
          // we increase the counter by 1
          counter++
        } 
      }
    }
    // return counter
    return counter
  }
  
  divisibleSumPairs(6, 3, [1,3,2,6,1,2])
  