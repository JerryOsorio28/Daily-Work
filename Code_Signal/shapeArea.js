function shapeArea(n) {
  // we need a loop that will add the new walls to the current polygon
  let result = 1
  let acc = 0
  
  if(n <= 1){
      return result
  }
  
  for(let i = 1; i < n; i++){
      acc += 4
      result += acc
  }
  return result
}