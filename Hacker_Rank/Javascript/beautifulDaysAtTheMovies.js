// Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number 12, its reverse is 21. Their difference is 9. The number 120 reversed is 21, and their difference is 99.

// She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

// Given a range of numbered days, [i...j] and a number 'k', determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where 'i - reverse(i)' is evenly divisible by k. If a day's value is a beautiful number, it is a beautiful day. Print the number of beautiful days in the range.


function beautifulDays(i, j, k) {
    // we need a counter to keep a track of beautiful days
    let beautifulDays = 0
    // we need to initialize a for loop starting with the value of 'i' and ending with the value of 'j'
    for(let start = i; start <= j; start++){
        // in the for loop, we need a variable that holds the reversed value of the current integer
        let reversed = Number(start.toString().split('').reverse().join(''))
        // then we subtract both current number and it's reversed value, and we divide the result by the value assigned to 'k'.
        let sub = start - reversed
        let result = sub / k
        // lastly, we check if the result is an even number or not, we can do so by checking if the result's remainder of 1 equals 0, if it does, is even, it means it's a beautiful day so we increase beautifulDays counter by 1.
        if(result % 1 === 0){
            beautifulDays++
        }
    }
    return beautifulDays
}