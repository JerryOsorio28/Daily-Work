// On this one we just had to find the max value on an array and remove it to print the minimum sum,
//and also remove the minimum value on the array and sum print the maximum sum.

function miniMaxSum(arr) {
    //we need to find the max number
    let max = Math.max(...arr)
    //we need to capture the array's initial value
    let new_arr = [...arr]
    //we need to find the min number
    let min = Math.min(...new_arr)
    //we need to split the array on the max index
    let split_max = arr.splice(arr.indexOf(max), 1)
    //we need to use the reduced method to sum the max value
    let min_result = arr.reduce((acc, curr) => acc + curr)
    //we need to split the array on the min index
    let split_min = new_arr.splice(new_arr.indexOf(min), 1)
    //we need to use the reduced method to sum the min value
    let max_result = new_arr.reduce((acc, curr) => acc + curr)
    //we need to print both min and max values, separated with a space 
    console.log(min_result + ' ' + max_result)
  
    //I learned that when using the Math.min && Math.max it's recommended to use the spread operator since, occasionally,
    //the result can be NaN, also when using the splice method, to avoid removing multiple elements, 
    //we must add as a second parameter how many elements we want to remove. :)
  }