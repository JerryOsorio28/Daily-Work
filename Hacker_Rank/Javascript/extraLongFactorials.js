// Functions that return the factorials of 'n'.

// ------------------------ ITERATIVELY
function extraLongFactorials(n) {
  let result = 1
  while(true){
    if(n <= 1){
      return result
    }
    result *= n
    n--
  }
}
extraLongFactorials(45) //120

// --------------- RECURSION
function extraLongFactorials(n) {
  
  if(n <= 1){
    return n
  }

  result = n * extraLongFactorials(n - 1)

  return result
}
extraLongFactorials(5) //120)


