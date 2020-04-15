// Lily has a chocolate bar that she wants to share it with Ron for his birthday. Each of the squares has an integer on it. 
// She decides to share a contiguous segment of the bar selected such that the length of the segment matches Ron's birth month and
// the sum of the integers on the squares is equal to his birth day. You must determine how many ways she can divide the chocolate.

// Consider the chocolate bar as an array of squares, s=[2,2,1,3,2]. She wants to find segments summing to Ron's birth day, d=4 with a length equalling his birth month, m=2. 
// In this case, there are two segments meeting her criteria: [2,2] and [1,3], so we return 2.

// Complete the birthday function below.
function birthday(s, d, m) {
    // we need a counter
    let chocoPieces = 0;
    // we need an array to hold the amount of values by the month values
    let arr = []
    // we need to iterate over the array of chocolate pieces
    for(let num in s){
      // we push to the array
      arr.push(s[num])
      // we check the array has the same length as the month, if it does..
      if(arr.length == m){
        // we want to reduce the array to a single number and...
        let newArr = [arr.reduce((a, b) => a + b)]
        console.log(arr)
        // we check if the reduced number matches withe the birthday, if it does..
        if(newArr[0] == d){
          // we increase the counter by one
          chocoPieces++
        }
        // we remove the first element in the array
        arr.shift()
      }
    }
    // return counter
    return chocoPieces
  }
  
  birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7)