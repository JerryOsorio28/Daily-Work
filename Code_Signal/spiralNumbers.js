// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.
// ---------
// Example
// ---------
// For n = 3, the output should be [[1, 2, 3],
//                                  [8, 9, 4],
//                                  [7, 6, 5]]

function spiralNumbers(n) {
  console.log('                                      ')
  // we need to make our matrix, we can initialize the values within it with 0's.
  let matrix = []

  // function to create matrix
  buildMatrix(n, matrix)

  let i = 0
  let j = 0
  let counter = 1
  let middle = Math.floor(n / 2)
  // we would need to iterate over the matrix, we need 2 iterators
  while(true){
    // as we iterate, we want to check if we can move to the next position in the iteration
    matrix[i][j] = counter

    if(matrix[i][j+1] == 0){
      j++
    } else if (matrix[i+1][j] == 0){
      i++
    } else if(matrix[i][j-1] == 0){
      j--
    } else if(matrix[i-1][j] == 0){
      i--
    }
    if(j + 1 != 0 && i - 1 != 0)

    counter++
  }
  console.log(matrix)
}
spiralNumbers(3)

// function to create matrix
function buildMatrix(n, matrix){
  let subArr = []

  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      subArr.push(0)
    }
    matrix.push(subArr)
    subArr = []
  }
}
