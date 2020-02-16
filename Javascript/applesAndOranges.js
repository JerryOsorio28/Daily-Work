


// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // variable that holds the apples within range
    let apples_in_range = 0
    // variable that holds the oranges within range
    let oranges_in_range = 0
  
    // we need to iterate over the apples and sum the values with their respective trees
    for(let i = 0; i < apples.length; i++){
      // we sum the values with the apple's tree
      apples[i] += a
    }
      // we need to iterate over the oranges and sum the values with their respective trees
    for(let i = 0; i < oranges.length; i++){
      // we sum the values with orange's tree
      oranges[i] += b
    }
  
    for(let i = 0; i < apples.length; i++){
    // if it is greater than starting point and same if it is less than ending point, we increase the fruit count.
      if(apples[i] >= s && apples[i] <= t){
        apples_in_range++
      }
    }
     for(let i = 0; i < oranges.length; i++){
    // if it is greater than starting point and same if it is less than ending point, we increase the fruit count.
      if(oranges[i] >= s && oranges[i] <= t){
        oranges_in_range++
      }
    }
    // we print apples
    console.log(apples_in_range)
    // we print oranges
    console.log(oranges_in_range)
  }