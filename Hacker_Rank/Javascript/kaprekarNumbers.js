// Given two positive integers p and q where p is lower than q, write a program to print the modified Kaprekar numbers in the range between p and q, inclusive. 
// If no modified Kaprekar numbers exist in the given range, print INVALID RANGE.
// In mathematics, a Kaprekar number for a given base is a non-negative integer, the representation of whose square in that base can be 
// split into two parts that add up to the original number again. For instance, 45 is a Kaprekar number, because 45² = 2025 and 20+25 = 45.

function kaprekarNumbers(p, q) {
// we would create a loop to iterate over the numbers 1 and 100
let kaprekar = false
let result = ''

for(let i = p; i <= q; i++){
  // as we iterate we want to square each number, split it in an even half and check if the sum of those 2 halves equal the current number in the iteration.
    let num = Math.pow(i, 2).toString()
    let middle = Math.floor(num.length / 2)
    let leftNum = num.slice(0, middle)
    let rightNum = num.slice(middle, num.length)

    if(Number(leftNum) + Number(rightNum) == i){
      kaprekar = true
      result += i
      result += ' '
    }
  }
  // if it does, we print the numbers, if at the end of the iteration there is no kaprekar numbers, we print 'INVALID RANGE'.
  if(kaprekar == false){
    console.log('INVALID RANGE')
  } else {
    console.log(result)
  }
}
kaprekarNumbers(1, 100) //should print 1, 9, 45, 55, 99