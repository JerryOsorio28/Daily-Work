//You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. 
//When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.
//For example, if your niece is turning 4 years old, and the cake will have 5 candles of height [1,2,3,4,4] she will be able to blow out 2 candles successfully, 
//since the tallest candles are of height 4 and there are 2 such candles.

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    //we need to grab the max value of the array
    let max_value = Math.max(...ar)
    //we can set a counter starting at 1
    let counter = 0
    //we need to iterate over the array to reach values
    for(let i = 0; i < ar.length; i++){
    //set a condition where if the value of i is equal to max value
      if(ar[i] === max_value){
        //increase counter by 1
        counter++
      }
    }
    //return counter
    return counter
  }