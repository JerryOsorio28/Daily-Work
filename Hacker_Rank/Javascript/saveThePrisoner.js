function saveThePrisoner(n, m, s) {
    // we can have a loop that would increase the starting posistion 's' up until it reaches the capacity of prisoners, the length of the loop will be the amount of candies available to distribute.
    let seat = s
    for(let i = 1; i < m; i++){
    // we check if the starting position counter is at prisoners capacity, if it is, we reset the counter to one, otherwise, we increase the counter by 1.
        if (seat == s - 1){
          let result = (m - i) / n
            if(result >= 2){
                i *= result
            }
        } 
        if(seat == n){
            seat = 1
        } else {
            seat++
        }
    }
    // lastly, once the candies are properly distribute, which is when the for loop is done, we return the counter
    return seat
}