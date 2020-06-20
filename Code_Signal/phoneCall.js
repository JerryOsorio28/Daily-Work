// Some phone usage rate may be described as follows:

// first minute of a call costs min1 cents,
// each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
// each minute after 10th costs min11 cents.
// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

// -------------------
// EXAMPLE
// -------------------
// For min1 = 3, min2_10 = 1, min11 = 2, and s = 20, the output should be = 14.

// Here's why:
// the first minute costs 3 cents, which leaves you with 20 - 3 = 17 cents;
// the total cost of minutes 2 through 10 is 1 * 9 = 9, so you can talk 9 more minutes and still have 17 - 9 = 8 cents;
// each next minute costs 2 cents, which means that you can talk 8 / 2 = 4 more minutes.
// Thus, the longest call you can make is 1 + 9 + 4 = 14 minutes long.

function phoneCall(min1, min2_10, min11, s) {
  let minuteFee = min1
  let minutes = 0

  while(s > 0){
    if(s >= minuteFee && minutes < 1){
      s -= minuteFee
      minutes++
    } else if(s >= minuteFee && minutes <= 9){
      minuteFee = min2_10
      s -= minuteFee
      minutes++
    } else if(s >= minuteFee){
      minuteFee = min11
      s -= minuteFee
      minutes++
    } else {
      break
    }
  }
  return minutes
} 
// -------------------------------------------------------------------------
// ANOTHER SOLUTION NOT TO GREAT SOLUTION (missing one test case)
// -------------------------------------------------------------------------

function phoneCall(min1, min2_10, min11, s) {
    // variable that holds the result of the total amount of minutes
    let minutes = 0
    // we need to subtract the first minute from the total, as long as there is enough coins, and increase minute count.
    if(s >= min1){
      s -= min1
      minutes++
    } else {
      return minutes  
    }
    // then, as long as we have coins for the next 9 minutes, we decrease the coins by the minute cost, up until we have reached either 10 minutes cap, or dont have enough coins.
    while(s >= min2_10 && minutes < 10){
      s -= min2_10
      minutes++
    }
    if(s <= 1){
      return minutes  
    }
    // last, while we have enough coins for the minutes remaining, for each minute we will deduct the updated minutes cost and increase the minutes count.
    while(s >= min11){
    s -= min11
    minutes++
    }
    
    return minutes
}