// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
  // we need to split the input in 2, grab the first half and sum all the numbers, and grab the second half and sum all the numbers, and verify if both sums are the same, 
  // if they are, it's a lucky ticket, so we return true, otherwise we return false.

  // to find the middle, and set halves to each variable with splice, we need to split the input into an array, to split input, we need to convert it into a string.
  n = n.toString().split('')
  let middle = n.length / 2
  // with splice, we set the variables to each half of the input
  let firstHalf = n.splice(0, middle)
  let secondHalf = n

  // we use the reduce method to reduce the array to a single value
  firstHalf = firstHalf.reduce((a, b) => Number(a) + Number(b))
  secondHalf = secondHalf.reduce((a, b) => Number(a) + Number(b))
  
  return firstHalf === secondHalf ? true : false
}