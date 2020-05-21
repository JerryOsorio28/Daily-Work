// An integer 'd' is a divisor of an integer  if the remainder of 'n % d = 0'.
// Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.

// Each digit is considered to be unique, so each occurrence of the same digit should be counted (e.g. for n=111, 1 is a divisor of 111 each time it occurs so the answer is 3).

// Another example is if n=12, each number (1, 2) is a divisor for 12, so it should return 2.

function findDigits(n) {
    // we need to grab the input, which is a random integer, split it into individual integers, then check if each individual integer is a divisor of the initial input integer, 
    // we do that by checking if the remainder of them is 0.
    let splitNum = n.toString().split('')
    let counter = 0

    for(let i = 0; i < splitNum.length; i++){
      if(n % splitNum[i] === 0){
        counter++
      }
    }
    return counter
}