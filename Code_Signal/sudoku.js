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
  let sudoku = `${grid}`
  // checks if the rows and columns have valid sudoku solutions, returns false if it does not.
  if(checkMatrix(grid) === false){
      return false
  }
  
  let smallMatrix = []
  
  for(let i = 0; i < grid.length; i++){
      let subArr = []
      for(let j = 0; j < grid.length; j++){
          subArr.push(grid[i][j])
          if(smallMatrix.length < 3 || i == 3 || i == 6 || i == 9){
            if(j == 2){
                smallMatrix.push(subArr)
                subArr = []
            } else if(j == 5){
                smallMatrix.push(subArr)
                subArr = []
            } else if(j == 8){
                smallMatrix.push(subArr)
                subArr = []
            }
          } else {
            if(j == 2){
              if(i <= 3){
                smallMatrix[0].push(...subArr)
                subArr = [] 
              } else if(i > 3 && i <= 6){
                smallMatrix[3].push(...subArr)
                subArr = []
              } else {
                smallMatrix[6].push(...subArr)
                subArr = []
              }
            } else if(j == 5){
              if(i <= 3){
                smallMatrix[1].push(...subArr)
                subArr = []
              } else if(i > 3 && i <= 6){
                smallMatrix[4].push(...subArr)
                subArr = []
              } else {
                smallMatrix[7].push(...subArr)
                subArr = []
              }
            } else if(j == 8){
              if(i <= 3){
                smallMatrix[2].push(...subArr)
                subArr = []
              } else if(i > 3 && i <= 6){
                smallMatrix[5].push(...subArr)
                subArr = []
              } else {
                smallMatrix[8].push(...subArr)
                subArr = []
              }
            }  
          }
      }
  }
  // checks if it exists valid 3x3 small matrixes solutions
  if(checkMatrix(smallMatrix) === false){
      return false
  }

  function checkMatrix(grid){
      // variable that stores the seen values in the iteration
      let seenValues = {}
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
      
      if(`${grid}` == sudoku){
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
      }
  }
  return true
}
