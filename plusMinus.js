// A function that checks how many negative, zeros and positive values are in a array,
// divides the count by the length of the array and prints the decimal value of them. 
function plusMinus(arr) {
    //we need 3 variables that hold the negative values, 0 values and positive values.
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    //we need to iterate over the array
    for (let i = 0; i < arr.length; i++){
    //conditional that checks if the numbers in the array are negative, equal to 0 or positives.
      if(arr[i] < 0){
      //we need to increase counters per condition.
        negatives += 1
      } 
      else if(arr[i] === 0){
        zeros += 1
      } 
      else if(arr[i] > 0){
        positives += 1
      }
    }
    //we have to divide the counters by the length of the array
    console.log(parseFloat(positives / arr.length).toFixed(6))
    console.log(parseFloat(negatives / arr.length).toFixed(6))
    console.log(parseFloat(zeros / arr.length).toFixed(6))
  }