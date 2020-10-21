// Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, \
// and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.
// ---------
// Example
// ---------
// For grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
//             [4, 6, 5, 8, 7, 9, 3, 2, 1],
//             [7, 9, 8, 2, 1, 3, 6, 5, 4],
//             [9, 2, 1, 4, 3, 5, 8, 7, 6],
//             [3, 5, 4, 7, 6, 8, 2, 1, 9],
//             [6, 8, 7, 1, 9, 2, 5, 4, 3],
//             [5, 7, 6, 9, 8, 1, 4, 3, 2],
//             [2, 4, 3, 6, 5, 7, 1, 9, 8],
//             [8, 1, 9, 3, 2, 4, 7, 6, 5]]

// the output should be true;

function sudoku(grid) {
  // variable that stores the seen values in the iteration
  let seenValues = {}
  // let smallMatrix = []

  // double for loop to check the rows of the matrix
  for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid.length; j++){
          // check if the current element in the iteration has been seen..
          if(seenValues[grid[i][j]]){
              // if it has, we return false
              return false
          // if not seen, we want to add the to the seen object
          } else {
              seenValues[grid[i][j]] = grid[i][j] 
          }
      }
      seenValues = {}
  }
  seenValues = {}
  
  let counter = 0
  while(counter < grid.length){
      // second double for loop to check columns of the matrix
      for(let i = 0; i < grid.length; i++){
          // check if the current element in the iteration has been seen..
          if(seenValues[grid[i][counter]]){
              // if it has, we return false
              return false 
          // if not seen, we want to add the to the seen object
          } else {
              seenValues[grid[i][counter]] = grid[i][counter]
          }
      }
      seenValues = {}
      counter++
  }
  
  
  // return true
  return true
}