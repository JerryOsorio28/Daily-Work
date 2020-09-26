// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.
// Given an integer, find its digit degree.
// -------------
// Example
// -------------
// For n = 5, the output should be 0;
// For n = 100, the output should be 1; // Explanation: 1 + 0 + 0 = 1.
// For n = 91, the output should be 2; //  Explanation: 9 + 1 = 10 -> 1 + 0 = 1.

function digitDegree(n) {
    // var to keep track of count
    let count = 0
    // as long as the number passed in is less than 9..
    while(n > 9){
        // we need to split the integer
        n = n.toString().split('')
        // we can use the reduce method to reduce arr to a single value
        n = n.reduce((a, b) => Number(a) + Number(b))
        // we increase de count up by 1
        count++
    }
    return count
}