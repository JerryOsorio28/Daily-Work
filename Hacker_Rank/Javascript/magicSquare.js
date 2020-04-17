// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
  // a variable that holds all the potential arrays
  let allArr = []
  // a variable that helps moving through columns
  let columns = 1
  // empty arr that will hold the columns values
  let subArr = []

  // this nested for loop will iterate times the length of the matrix to the power of 2, giving us the length of the sub arrays rows and columns, - 2 excluding the diagonal ones.
  for(let a = 0; a < Math.pow(s.length, 2) - 2; a++){
    for(let b = s.length - 1; b >= 0; b--){
      // checks if sub arr already exists in allArr, to avoid duplicates
      if(!allArr.includes(s[b])){
        allArr.push(s[b])
      }
      // grabs the values of the current column and pushes them to the subArr
      for(let c = s[b].length - columns; c >= 0; c--){
        subArr.push(s[b][c])
        // we make sure before pushing the subArr, since we are iterating in reverse, to reverse back the array to the correct order.
        if(subArr.length == s.length){
          subArr = subArr.reverse()
        }
        break
      }
    }
    // checks the length of the subArr to avoid potential empty arrays, and pushes them to allArr
    if(subArr.length > 0){
      allArr.push(subArr)
      // we reinitialize the subArr to be empty and we move through the columns by increasing it by 1
      subArr = []
      columns++
    }
  }

  // this for loop handles the diagonal arrays, since on a matrix, there is only to diagonal lines, we initialize it with to empty sub arrays.
  let diagonalArr = [[], []]
  for(let i = 0, j = s[i].length - 1; i < s.length; i++, j--){
    // here we push the respective values as we iterate, moving with i from top left, down to bottom right, as well as with j, from top right to bottom left.
    diagonalArr[0].push(s[i][i])
    diagonalArr[1].push(s[i][j])
  }
  console.log(allArr)
  // lastly we push the diagonal arrays, and we now have all the potential arrays
  allArr.push(diagonalArr[0])
  allArr.push(diagonalArr[1])

  // this for loop will grab the max value, which to what value we will balance the square to.
  let maxSum = 0
  for(let i = 0; i < allArr.length; i++){
    let sum = allArr[i].reduce((a, b) => a + b) 
    if( sum > maxSum){
      maxSum = sum
    }
  }                  

  // have a counter to keep a track of how many numbers are changed
  let otherObj = {}
  let middle = allArr.length / 2 - 1
  let pointer = 0
  // this for loops create an object with the current position as keys, and those keys hold another object with rows and columns, and each row and column has an array with 2 things, the array for the rows and columns on index 0, and on index 1 the reduced value from does arrays.
  for(let i = 0; i < allArr.length; i++){
    if(i < allArr.length / 2 - 1){
      otherObj[i] = {'row': null, 'column': null}
    }
    if(i < middle){
      otherObj[i]['row'] = [allArr[i], allArr[i].reduce((a, b) => a + b)]
    }
  }
  
  for(let i = 0; i < allArr.length; i++){
    if ( i >= middle && i < allArr.length - 2){
      otherObj[pointer]['column'] = [allArr[i], allArr[i].reduce((a, b) => a + b)]
      pointer++
    }
  }
  
  let column = 0
  // this is the variable that we need to return, indicating how many numbers were changed.
  let numbersChanged = 0
  // for loop to iterate over the otherObj
  for(let i = Object.keys(otherObj).length - 1; i >= 0; i--){
    for(let j = Object.keys(otherObj).length - 1; j >= 0; j--){

      // a condition that checks if the sum of the current row and column are not equal to the max value and, if the sum of both hold the same values..
      if(otherObj[i].row[1] !== maxSum && otherObj[j].column[1] !== maxSum && otherObj[i].row[1] === otherObj[j].column[1]){
        // we update the value of the element in position `column`, in the column array, in the current position in our obj 
        otherObj[j].column[0][column] += maxSum - otherObj[i].row[1] 
        // we update the reduced value, in the column array, in the current position in our obj 
        otherObj[j].column[1] += maxSum - otherObj[i].row[1]
        // we update the value of the element in position `column`, in the row array, in the current position in our obj 
        otherObj[i].row[0][column] += maxSum - otherObj[i].row[1]
        // we update the reduced value, in the row array, in the current position in our obj
        otherObj[i].row[1] += maxSum - otherObj[i].row[1]
        numbersChanged++
      }
      column++
    }
    column = 0
  }
  return numbersChanged
}

formingMagicSquare([[5, 3, 4],
  [1, 5, 8],
  [6, 4, 2]])