// Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value describing a range of integers. Sherlock must determine the number of square integers within that range, inclusive of the endpoints.

// Note: A square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25.

// For example, the range is a=24 and b=49, inclusive. There are three square integers in the range: 24, 36 and 49.


function squares(a, b) {
  let squareInt = 0
  let counter = 0
  let num = 1

  // we can find if the square integer is within the range of 'a' and 'b' by multiplying the same integer by itself, starting at 1, counting up.
  while(squareInt <= b){
    squareInt = num * num
    if(squareInt >= a && squareInt <= b){
      counter++
    }
    num++
  }
  return counter
}