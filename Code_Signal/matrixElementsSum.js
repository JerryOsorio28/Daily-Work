// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, 
// but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, 
// or any of the rooms below any of the free rooms.

// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the 
// CodeBots (ie: add up all the values that don't appear below a 0).
// -----------
// Example
// -----------
// matrix = [[0, 1, 1, 2], 
//           [0, 5, 0, 0], 
//           [2, 0, 3, 3]]
// the output should be = 9, there are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.

function matrixElementsSum(matrix) {
  // we need a double for loop to iterate over the rows and columns of our matrix
  // variable that holds the sum of the values of all valid rooms 
  let validRoomsSum = 0
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if(i === 0){
        if(matrix[i][j] !== 0){
          validRoomsSum += matrix[i][j]
        }
      } else {
      // as we iterate, we can check if the room is not haunted, and the rooms above it are not haunted either, if that condition it's true, 
      // add the current value to the var holding valid rooms, otherwise ignore.
          let index = i
          let hauntedCol = false
          if(matrix[i][j] !== 0){
              while(index > 0){
                  if(matrix[index-1][j] !== 0){
                      index--
                  } else {
                      hauntedCol = true
                      break
                  }
              }
              if(hauntedCol !== true){
                  validRoomsSum += matrix[i][j]
              }
          }
      }
    }
  }
  return validRoomsSum
}
