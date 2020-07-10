// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. 
// Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

function arrayChange(inputArray) {
    let result = 0
    for(let i = 0; i < inputArray.length - 1; i++){
        if(inputArray[i] === inputArray[i+1]){
            inputArray[i+1]++
            result++
        } else if(inputArray[i] > inputArray[i+1]){
          let substraction = inputArray[i] - inputArray[i+1]
          inputArray[i+1] += substraction + 1
          result += substraction + 1
        }
    }
    return result
}