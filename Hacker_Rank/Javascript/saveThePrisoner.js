// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
  // we can do this in constant time O(1) by simply doing some math. The first thing we need to determine is how many times we can go around the table, we can do this by diving
  // the total amount of candies by the amount of prisoners, and round it down to the nearest integer. 
  let rounds = Math.floor(m / n)
  // Then, we can determine the remaining amount of candies after completing the rounds by first multiplying the rounds we can do times the number of prisoners, minus the total amount
  // of candies.
  let candiesRemaining = m - rounds * n
  // Lastly, we can determine which seat was the one who grabbed the awful last candy by summing the starting point plus the amount of candy remaining, minus 1 since we count the
  // the starting point seat.
  let finalResult = s + candiesRemaining - 1 
  // before we return the final result, we need to check if it is greater than the amount of prisoners, if it is, it means we completed another round, so we subtract the number of prisoners
  if(finalResult > n){
      finalResult -= n
  }

  return finalResult
}