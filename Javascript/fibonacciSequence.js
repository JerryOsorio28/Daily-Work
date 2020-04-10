function fibonacci(n) {
    // we initialize an empty arr that will hold the values of the fib sequence
    let arr = []
    // we check if n is less or equal than 1, if it is, we want to return an array with a 0 in it
    if(n <= 1){
      arr.push(0)
    // else we want to re-initialize the arr with the values 0 and 1 in it
    } else {
      arr.push(0)
      arr.push(1)
    }
    // numbers to sum as we calculate the fib of each number as we go
    let num1 = 0
    let num2 = 1
    // while the length of the array is less or equal than n - 1...
    while(arr.length <= n - 1){
      // we have a temp var that holds the sum of the two numbers
      let result = 0
      result = num1 + num2
      // we update the first num to be the same as the second num
      num1 = num2
      // and we update the second to be the result, which is the sum of the two
      num2 = result
      // and we push the result to the arr
      arr.push(result)
    }
    // after is done we return the array
    return arr
  }
  
  fibonacci(8) //should print [0,1,1,2,3,5,8, 13]